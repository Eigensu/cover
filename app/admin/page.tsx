"use client"

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Users, 
  Eye, 
  Search, 
  Filter,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
  FileText
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface CareerApplication {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  collegeName: string;
  degree: string;
  graduationYear: string;
  githubUrl: string;
  portfolioUrl?: string;
  linkedinUrl: string;
  resumeUrl: string;
  nextjsProficiency: string;
  fastApiProficiency: string;
  typescriptExperience: string;
  aiTools: string[];
  projectShowcase: string;
  agenticWorkflow: string;
  devopsDeployment: string;
  crudApiTime: string;
  availability: string;
  startDate: string;
  hoursPerWeek: string;
  status: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export default function AdminDashboard() {
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<CareerApplication | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchApplications = async (page = 1, status = "", search = "") => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10"
      });
      
      if (status) params.append("status", status);
      
      const response = await fetch(`/api/careers?${params}`);
      const data = await response.json();
      
      let filteredApplications = data.applications;
      
      // Client-side search filtering
      if (search) {
        filteredApplications = data.applications.filter((app: CareerApplication) =>
          app.fullName.toLowerCase().includes(search.toLowerCase()) ||
          app.email.toLowerCase().includes(search.toLowerCase()) ||
          app.collegeName.toLowerCase().includes(search.toLowerCase())
        );
      }
      
      setApplications(filteredApplications);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications(1, statusFilter, searchTerm);
  }, [statusFilter]);

  const handleSearch = () => {
    fetchApplications(1, statusFilter, searchTerm);
  };

  const handlePageChange = (newPage: number) => {
    fetchApplications(newPage, statusFilter, searchTerm);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "reviewing": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "interviewed": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "hired": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "rejected": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Career Applications Dashboard</h1>
          <p className="text-muted-foreground">Manage and review job applications</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                  <p className="text-2xl font-bold">{pagination.total}</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
                  <p className="text-2xl font-bold">
                    {applications.filter(app => app.status === "pending").length}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Under Review</p>
                  <p className="text-2xl font-bold">
                    {applications.filter(app => app.status === "reviewing").length}
                  </p>
                </div>
                <Eye className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hired</p>
                  <p className="text-2xl font-bold">
                    {applications.filter(app => app.status === "hired").length}
                  </p>
                </div>
                <Users className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by name, email, or college..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="reviewing">Reviewing</SelectItem>
                  <SelectItem value="interviewed">Interviewed</SelectItem>
                  <SelectItem value="hired">Hired</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              
              <Button onClick={handleSearch}>
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Applications Table */}
        <Card>
          <CardHeader>
            <CardTitle>Applications</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading applications...</div>
            ) : applications.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No applications found</div>
            ) : (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>College</TableHead>
                      <TableHead>Experience</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((application) => (
                      <TableRow key={application._id}>
                        <TableCell className="font-medium">{application.fullName}</TableCell>
                        <TableCell>{application.email}</TableCell>
                        <TableCell>{application.collegeName}</TableCell>
                        <TableCell>{application.typescriptExperience} years TS</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(application.status)}>
                            {application.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDate(application.submittedAt)}</TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setSelectedApplication(application)}
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Application Details - {application.fullName}</DialogTitle>
                              </DialogHeader>
                              
                              {selectedApplication && (
                                <div className="space-y-6">
                                  {/* Basic Information */}
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <p className="text-sm text-muted-foreground">Full Name</p>
                                        <p className="font-medium">{selectedApplication.fullName}</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <div className="flex items-center gap-2">
                                          <Mail className="w-4 h-4" />
                                          <a href={`mailto:${selectedApplication.email}`} className="text-primary hover:underline">
                                            {selectedApplication.email}
                                          </a>
                                        </div>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground">Phone</p>
                                        <div className="flex items-center gap-2">
                                          <Phone className="w-4 h-4" />
                                          <span>{selectedApplication.phone}</span>
                                        </div>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground">Education</p>
                                        <p className="font-medium">
                                          {selectedApplication.degree} - {selectedApplication.collegeName} ({selectedApplication.graduationYear})
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Technical Links */}
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">Technical Links</h3>
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2">
                                        <Github className="w-4 h-4" />
                                        <a href={selectedApplication.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                          GitHub Profile
                                        </a>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Linkedin className="w-4 h-4" />
                                        <a href={selectedApplication.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                          LinkedIn Profile
                                        </a>
                                      </div>
                                      {selectedApplication.portfolioUrl && (
                                        <div className="flex items-center gap-2">
                                          <Globe className="w-4 h-4" />
                                          <a href={selectedApplication.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                            Portfolio Website
                                          </a>
                                        </div>
                                      )}
                                      <div className="flex items-center gap-2">
                                        <FileText className="w-4 h-4" />
                                        <a href={selectedApplication.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                          Resume/CV
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Skills */}
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                      <div>
                                        <p className="text-sm text-muted-foreground">Next.js</p>
                                        <p className="font-medium">{selectedApplication.nextjsProficiency}/5</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground">FastAPI</p>
                                        <p className="font-medium">{selectedApplication.fastApiProficiency}/5</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground">TypeScript</p>
                                        <p className="font-medium">{selectedApplication.typescriptExperience} years</p>
                                      </div>
                                    </div>
                                    <div className="mt-3">
                                      <p className="text-sm text-muted-foreground mb-2">AI Tools</p>
                                      <div className="flex flex-wrap gap-2">
                                        {selectedApplication.aiTools.map((tool) => (
                                          <Badge key={tool} variant="secondary">{tool}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Technical Questions */}
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">Technical Questions</h3>
                                    <div className="space-y-4">
                                      <div>
                                        <p className="text-sm text-muted-foreground mb-1">Project Showcase</p>
                                        <p className="text-sm bg-muted p-3 rounded">{selectedApplication.projectShowcase}</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground mb-1">Agentic Workflow</p>
                                        <p className="text-sm bg-muted p-3 rounded">{selectedApplication.agenticWorkflow}</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground mb-1">DevOps/Deployment</p>
                                        <p className="text-sm bg-muted p-3 rounded">{selectedApplication.devopsDeployment}</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground mb-1">CRUD API Time Estimate</p>
                                        <p className="text-sm bg-muted p-3 rounded">{selectedApplication.crudApiTime}</p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Availability */}
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">Availability</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                      <div>
                                        <p className="text-sm text-muted-foreground">6 Month Commitment</p>
                                        <p className="font-medium capitalize">{selectedApplication.availability}</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground">Start Date</p>
                                        <p className="font-medium">{selectedApplication.startDate}</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground">Hours per Week</p>
                                        <p className="font-medium capitalize">{selectedApplication.hoursPerWeek}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                  <p className="text-sm text-muted-foreground">
                    Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} applications
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(pagination.page - 1)}
                      disabled={pagination.page <= 1}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </Button>
                    
                    <span className="text-sm">
                      Page {pagination.page} of {pagination.pages}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(pagination.page + 1)}
                      disabled={pagination.page >= pagination.pages}
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}