import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calculator,
  TrendingDown,
  ShoppingCart,
  FileText,
  Award,
  Users,
  BarChart3,
  Lightbulb,
  Truck,
  Zap,
  Factory,
  Building2,
  LogOut
} from "lucide-react";
import CarbonCalculator from "@/components/CarbonCalculator";
import SuggestionsPanel from "@/components/SuggestionsPanel";
import CreditMarketplace from "@/components/CreditMarketplace";
import { useNavigate } from "react-router-dom";

const CorporateDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("calculator");

  // Mock data
  const companyData = {
    name: "EcoTech Industries",
    totalEmissions: 12450,
    reductionTarget: 25,
    creditsOwned: 2400,
    esgScore: 78,
    badges: ["Bronze Reducer", "Carbon Conscious"]
  };

  const emissionBreakdown = [
    { category: "Transportation", value: 4500, percentage: 36, icon: Truck, color: "bg-red-500" },
    { category: "Energy", value: 3200, percentage: 26, icon: Zap, color: "bg-orange-500" },
    { category: "Manufacturing", value: 2800, percentage: 22, icon: Factory, color: "bg-yellow-500" },
    { category: "Buildings", value: 1950, percentage: 16, icon: Building2, color: "bg-blue-500" }
  ];

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
              <div className="gradient-ocean rounded-lg p-2">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">{companyData.name}</h1>
                <p className="text-sm text-muted-foreground">Corporate Carbon Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="gradient-nature text-white">
                  ESG Score: {companyData.esgScore}
                </Badge>
                <Badge variant="outline" className="text-ocean-blue border-ocean-blue">
                  {companyData.badges[0]}
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
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Emissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">
                {companyData.totalEmissions.toLocaleString()} tCO₂e
              </div>
              <p className="text-sm text-muted-foreground mt-1">Current year</p>
            </CardContent>
          </Card>

          <Card className="eco-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Reduction Target</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-nature-green">
                {companyData.reductionTarget}%
              </div>
              <p className="text-sm text-muted-foreground mt-1">By 2030</p>
            </CardContent>
          </Card>

          <Card className="eco-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Credits Owned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-ocean-blue">
                {companyData.creditsOwned.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground mt-1">Verified credits</p>
            </CardContent>
          </Card>

          <Card className="eco-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">ESG Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {companyData.esgScore}/100
              </div>
              <p className="text-sm text-muted-foreground mt-1">Industry rank: Top 20%</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit">
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Calculator
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Suggestions
            </TabsTrigger>
            <TabsTrigger value="marketplace" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Marketplace
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Reports
            </TabsTrigger>
            <TabsTrigger value="credits" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              My Credits
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Calculator */}
              <div className="lg:col-span-2">
                <CarbonCalculator />
              </div>
              
              {/* Emission Breakdown */}
              <Card className="eco-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-ocean-blue" />
                    Emission Breakdown
                  </CardTitle>
                  <CardDescription>Current year distribution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {emissionBreakdown.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={item.category} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${item.color}`}>
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium">{item.category}</p>
                            <p className="text-sm text-muted-foreground">{item.percentage}%</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{item.value.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">tCO₂e</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-6">
            <SuggestionsPanel />
          </TabsContent>

          <TabsContent value="marketplace" className="space-y-6">
            <CreditMarketplace />
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="eco-card">
              <CardHeader>
                <CardTitle>Carbon Footprint Reports</CardTitle>
                <CardDescription>Download and view your emission reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Annual Carbon Report 2024</h4>
                      <p className="text-sm text-muted-foreground">Generated on March 15, 2024</p>
                    </div>
                    <Button variant="outline">Download PDF</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Q4 2023 Emission Analysis</h4>
                      <p className="text-sm text-muted-foreground">Generated on January 10, 2024</p>
                    </div>
                    <Button variant="outline">Download PDF</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Scope 3 Emissions Report</h4>
                      <p className="text-sm text-muted-foreground">Generated on December 5, 2023</p>
                    </div>
                    <Button variant="outline">Download PDF</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="credits" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="eco-card">
                <CardHeader>
                  <CardTitle>Credit Balance</CardTitle>
                  <CardDescription>Your verified carbon credits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-ocean-blue mb-4">
                    {companyData.creditsOwned.toLocaleString()} Credits
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Available:</span>
                      <span className="font-medium">2,100 credits</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Retired:</span>
                      <span className="font-medium">300 credits</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Market Value:</span>
                      <span className="font-medium">$48,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="eco-card">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your credit purchase history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Mangrove Restoration - Kerala</p>
                        <p className="text-sm text-muted-foreground">March 10, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-nature-green">+500 credits</p>
                        <p className="text-sm text-muted-foreground">$10,000</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Seagrass Conservation - Tamil Nadu</p>
                        <p className="text-sm text-muted-foreground">February 28, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-nature-green">+300 credits</p>
                        <p className="text-sm text-muted-foreground">$6,000</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CorporateDashboard;