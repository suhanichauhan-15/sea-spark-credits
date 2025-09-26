import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf,
  Upload,
  CheckCircle,
  DollarSign,
  Users,
  MapPin,
  Camera,
  FileText,
  TrendingUp,
  Award,
  Building2,
  LogOut
} from "lucide-react";
import ProjectUpload from "@/components/ProjectUpload";
import ProjectMarketplace from "@/components/ProjectMarketplace";
import { useNavigate } from "react-router-dom";

const NGODashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("projects");

  // Mock data
  const ngoData = {
    name: "Coastal Conservation Alliance",
    totalProjects: 15,
    verifiedCredits: 8500,
    pendingVerification: 3200,
    totalRevenue: 170000,
    communitiesServed: 25,
    hectaresRestored: 450
  };

  const projects = [
    {
      id: 1,
      name: "Mangrove Restoration - Sundarbans",
      location: "West Bengal, India",
      status: "verified",
      hectares: 120,
      credits: 2400,
      revenue: 48000,
      communities: 8,
      uploadDate: "2024-02-15"
    },
    {
      id: 2,
      name: "Seagrass Conservation - Gulf of Mannar",
      location: "Tamil Nadu, India", 
      status: "pending",
      hectares: 85,
      credits: 1700,
      revenue: 0,
      communities: 5,
      uploadDate: "2024-03-01"
    },
    {
      id: 3,
      name: "Coastal Wetland Protection - Chilika",
      location: "Odisha, India",
      status: "verified",
      hectares: 200,
      credits: 4000,
      revenue: 80000,
      communities: 12,
      uploadDate: "2024-01-20"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-nature-green text-white">Verified</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending Verification</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Needs Revision</Badge>;
      default:
        return <Badge variant="outline">Draft</Badge>;
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-eco">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="gradient-nature rounded-lg p-2">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">{ngoData.name}</h1>
                <p className="text-sm text-muted-foreground">Blue Carbon Project Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="gradient-ocean text-white">
                  Impact Score: 92
                </Badge>
                <Badge variant="outline" className="text-nature-green border-nature-green">
                  Certified NGO
                </Badge>
              </div>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="eco-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {ngoData.totalProjects}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Active & completed</p>
            </CardContent>
          </Card>

          <Card className="eco-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Credits Issued</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-nature-green">
                {ngoData.verifiedCredits.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Verified credits</p>
            </CardContent>
          </Card>

          <Card className="eco-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-ocean-blue">
                ${ngoData.totalRevenue.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground mt-1">From credit sales</p>
            </CardContent>
          </Card>

          <Card className="eco-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Hectares Restored</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-forest-green">
                {ngoData.hectaresRestored}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Blue carbon ecosystems</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              My Projects
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Data
            </TabsTrigger>
            <TabsTrigger value="marketplace" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Marketplace
            </TabsTrigger>
            <TabsTrigger value="revenue" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Revenue
            </TabsTrigger>
            <TabsTrigger value="partnerships" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Partners
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-nature-green" />
                  Project Portfolio
                </CardTitle>
                <CardDescription>Track your blue carbon restoration projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4 hover:shadow-nature transition-eco">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-lg">{project.name}</h4>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            {project.location}
                          </p>
                        </div>
                        {getStatusBadge(project.status)}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Hectares</p>
                          <p className="font-semibold">{project.hectares}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Credits</p>
                          <p className="font-semibold text-nature-green">{project.credits.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Revenue</p>
                          <p className="font-semibold text-ocean-blue">
                            ${project.revenue.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Communities</p>
                          <p className="font-semibold">{project.communities}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t">
                        <p className="text-sm text-muted-foreground">
                          Uploaded: {new Date(project.uploadDate).toLocaleDateString()}
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Camera className="h-4 w-4 mr-1" />
                            View Images
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            MRV Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <ProjectUpload />
          </TabsContent>

          <TabsContent value="marketplace" className="space-y-6">
            <ProjectMarketplace />
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="eco-card">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Total earnings from credit sales</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-ocean-blue mb-4">
                    ${ngoData.totalRevenue.toLocaleString()}
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Community Share (60%)</span>
                      <span className="font-medium">${(ngoData.totalRevenue * 0.6).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">NGO Operations (25%)</span>
                      <span className="font-medium">${(ngoData.totalRevenue * 0.25).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Verification Costs (10%)</span>
                      <span className="font-medium">${(ngoData.totalRevenue * 0.1).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Platform Fee (5%)</span>
                      <span className="font-medium">${(ngoData.totalRevenue * 0.05).toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="eco-card">
                <CardHeader>
                  <CardTitle>Community Impact</CardTitle>
                  <CardDescription>Direct benefits to local communities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="h-8 w-8 text-nature-green" />
                      <div>
                        <p className="font-semibold">{ngoData.communitiesServed} Communities</p>
                        <p className="text-sm text-muted-foreground">Directly benefited</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-ocean-blue">
                        ${(ngoData.totalRevenue * 0.6).toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">Distributed</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Payment Progress</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-nature-green">450</p>
                      <p className="text-sm text-muted-foreground">Jobs Created</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-ocean-blue">1.2M</p>
                      <p className="text-sm text-muted-foreground">Fish Returned</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="partnerships" className="space-y-6">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle>Corporate Partners</CardTitle>
                <CardDescription>Companies supporting your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">EcoTech Industries</h4>
                      <Badge className="bg-nature-green text-white">Active</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Credits Purchased:</span>
                        <span className="font-medium">2,400</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Investment:</span>
                        <span className="font-medium">$48,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Partnership Since:</span>
                        <span className="font-medium">Jan 2024</span>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">GreenTech Solutions</h4>
                      <Badge className="bg-nature-green text-white">Active</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Credits Purchased:</span>
                        <span className="font-medium">1,800</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Investment:</span>
                        <span className="font-medium">$36,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Partnership Since:</span>
                        <span className="font-medium">Feb 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NGODashboard;