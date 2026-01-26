# Eigensu - Next.js Website with MongoDB Integration

A modern, responsive website built with Next.js 14, TypeScript, Tailwind CSS, and MongoDB for career form submissions.

## Features

- ✨ **Modern Design**: Beautiful UI with dark/light mode support
- 🚀 **Next.js 14**: Latest App Router with server components
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🎨 **Tailwind CSS**: Utility-first CSS framework with custom design system
- 🌙 **Theme Support**: Dark and light mode with smooth transitions
- 📊 **MongoDB Integration**: Career form submissions stored in MongoDB
- 🔧 **TypeScript**: Full type safety throughout the application
- 🎭 **Framer Motion**: Smooth animations and transitions
- 📝 **Career Form**: Comprehensive hiring form with validation

## Pages

- **Home** (`/`): Main landing page with services, testimonials, and contact form
- **Projects** (`/projects`): Portfolio showcase of completed projects
- **Careers** (`/careers`): Comprehensive hiring form with MongoDB integration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eigensu-nextjs
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb://localhost:27017/eigensu
   # Or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/eigensu?retryWrites=true&w=majority
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## MongoDB Setup

### Local MongoDB

1. Install MongoDB locally
2. Start MongoDB service
3. The database `eigensu` and collection `career_applications` will be created automatically

### MongoDB Atlas (Recommended for Production)

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in `.env.local`

## Career Form API

The career form submissions are handled by the API route at `/api/careers`:

### POST `/api/careers`
Submit a new career application

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "collegeName": "University of Technology",
  "degree": "Computer Science",
  "graduationYear": "2024",
  "githubUrl": "https://github.com/johndoe",
  "portfolioUrl": "https://johndoe.dev",
  "linkedinUrl": "https://linkedin.com/in/johndoe",
  "resumeUrl": "https://drive.google.com/file/d/resume",
  "nextjsProficiency": "4",
  "fastApiProficiency": "3",
  "typescriptExperience": "2+",
  "aiTools": ["Cursor", "GitHub Copilot"],
  "projectShowcase": "Description of project...",
  "agenticWorkflow": "How I use AI tools...",
  "devopsDeployment": "Deployment experience...",
  "crudApiTime": "Time estimate...",
  "availability": "yes",
  "startDate": "Immediately",
  "hoursPerWeek": "full-time"
}
```

### GET `/api/careers`
Retrieve career applications (with pagination)

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `status`: Filter by status (pending, reviewing, interviewed, hired, rejected)

## Database Schema

### Career Applications Collection

```javascript
{
  _id: ObjectId,
  fullName: String,
  email: String (unique),
  phone: String,
  collegeName: String,
  degree: String,
  graduationYear: String,
  githubUrl: String,
  portfolioUrl: String (optional),
  linkedinUrl: String,
  resumeUrl: String,
  nextjsProficiency: String (1-5),
  fastApiProficiency: String (1-5),
  typescriptExperience: String ("<1", "1-2", "2+"),
  aiTools: Array of Strings,
  projectShowcase: String,
  agenticWorkflow: String,
  devopsDeployment: String,
  crudApiTime: String,
  availability: String ("yes", "no"),
  startDate: String,
  hoursPerWeek: String ("part-time", "full-time"),
  status: String ("pending", "reviewing", "interviewed", "hired", "rejected"),
  submittedAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Development

### Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── careers/       # Career form API
│   ├── careers/           # Careers page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (Radix)
│   ├── hooks/            # Custom hooks
│   └── ...               # Other components
├── lib/                  # Utility functions
│   └── mongodb.ts        # MongoDB connection
└── public/               # Static assets
```

### Key Components

- **CardNav**: Navigation component with theme-aware styling
- **Logo**: Dynamic logo component that adapts to theme
- **ThemeToggle**: Dark/light mode toggle
- **ModernFooter**: Footer with links and contact info
- **Career Form**: Comprehensive hiring form with validation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.

## Support

For support, email hello@eigensu.com or create an issue in the repository.