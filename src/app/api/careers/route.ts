import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = [
      'fullName', 'email', 'phone', 'collegeName', 'degree', 'graduationYear',
      'githubUrl', 'linkedinUrl', 'resumeUrl', 'nextjsProficiency', 'fastApiProficiency',
      'typescriptExperience', 'projectShowcase', 'agenticWorkflow', 'devopsDeployment',
      'crudApiTime', 'availability', 'startDate', 'hoursPerWeek'
    ]
    
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate URLs
    const urlFields = ['githubUrl', 'linkedinUrl', 'resumeUrl']
    if (body.portfolioUrl) urlFields.push('portfolioUrl')
    
    for (const field of urlFields) {
      if (body[field]) {
        try {
          new URL(body[field])
        } catch {
          return NextResponse.json(
            { error: `Invalid URL format for ${field}` },
            { status: 400 }
          )
        }
      }
    }

    // Validate proficiency levels
    const proficiencyFields = ['nextjsProficiency', 'fastApiProficiency']
    for (const field of proficiencyFields) {
      const value = parseInt(body[field])
      if (isNaN(value) || value < 1 || value > 5) {
        return NextResponse.json(
          { error: `${field} must be a number between 1 and 5` },
          { status: 400 }
        )
      }
    }

    // Validate TypeScript experience
    const validTsExperience = ['<1', '1-2', '2+']
    if (!validTsExperience.includes(body.typescriptExperience)) {
      return NextResponse.json(
        { error: 'Invalid TypeScript experience value' },
        { status: 400 }
      )
    }

    // Validate availability and hours per week
    if (!['yes', 'no'].includes(body.availability)) {
      return NextResponse.json(
        { error: 'Availability must be "yes" or "no"' },
        { status: 400 }
      )
    }

    if (!['part-time', 'full-time'].includes(body.hoursPerWeek)) {
      return NextResponse.json(
        { error: 'Hours per week must be "part-time" or "full-time"' },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db('eigensu')
    const collection = db.collection('career_applications')

    // Check for duplicate applications (same email)
    const existingApplication = await collection.findOne({ email: body.email })
    if (existingApplication) {
      return NextResponse.json(
        { error: 'An application with this email already exists' },
        { status: 409 }
      )
    }

    // Prepare the document
    const applicationData = {
      ...body,
      submittedAt: new Date(),
      status: 'pending', // pending, reviewing, interviewed, hired, rejected
      createdAt: new Date(),
      updatedAt: new Date()
    }

    // Insert the application
    const result = await collection.insertOne(applicationData)

    return NextResponse.json(
      { 
        message: 'Application submitted successfully',
        applicationId: result.insertedId
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error submitting career application:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')
    
    const client = await clientPromise
    const db = client.db('eigensu')
    const collection = db.collection('career_applications')

    // Build query
    const query: any = {}
    if (status) {
      query.status = status
    }

    // Get total count
    const total = await collection.countDocuments(query)

    // Get applications with pagination
    const applications = await collection
      .find(query)
      .sort({ submittedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray()

    return NextResponse.json({
      applications,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching career applications:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}