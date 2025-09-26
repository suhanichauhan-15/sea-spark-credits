import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Leaf, ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="min-h-screen gradient-ocean relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-nature-green rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-sky-blue rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-forest-green rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 glow-ocean">
              <Leaf className="h-12 w-12 text-white animate-wave" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Blue Carbon Registry
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Blockchain-backed platform connecting corporate carbon footprint analysis with 
            blue carbon credit marketplace for a sustainable future
          </p>
          <div className="flex items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span>AI-Powered Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Community Driven</span>
            </div>
          </div>
        </div>

        {/* Role Selection */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Choose Your Role
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Corporate Role */}
            <Card 
              className="eco-card cursor-pointer hover:scale-105 transition-eco bg-white/95 backdrop-blur-sm border-white/20 animate-fade-in-up" 
              style={{animationDelay: '0.4s'}}
              onClick={() => handleRoleSelect('corporate')}
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-ocean rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 glow-ocean">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-ocean-blue">Corporate</CardTitle>
                <CardDescription className="text-gray-600">
                  Carbon Emission Analysis & Credit Purchasing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-nature-green rounded-full"></div>
                    <span>Calculate carbon footprint with AI</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-nature-green rounded-full"></div>
                    <span>Get reduction recommendations</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-nature-green rounded-full"></div>
                    <span>Purchase verified carbon credits</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-nature-green rounded-full"></div>
                    <span>Track ESG compliance</span>
                  </li>
                </ul>
                <Button 
                  className="w-full gradient-ocean text-white hover:opacity-90 transition-eco"
                  onClick={() => handleRoleSelect('corporate')}
                >
                  Continue as Corporate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* NGO Role */}
            <Card 
              className="eco-card cursor-pointer hover:scale-105 transition-eco bg-white/95 backdrop-blur-sm border-white/20 animate-fade-in-up" 
              style={{animationDelay: '0.6s'}}
              onClick={() => handleRoleSelect('ngo')}
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-nature rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-nature">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-nature-green">NGO / Community</CardTitle>
                <CardDescription className="text-gray-600">
                  Blue Carbon Project Management & Credit Issuance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                    <span>Upload restoration project data</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                    <span>Track MRV verification status</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                    <span>Issue verified carbon credits</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                    <span>Receive community payments</span>
                  </li>
                </ul>
                <Button 
                  className="w-full gradient-nature text-white hover:opacity-90 transition-eco"
                  onClick={() => handleRoleSelect('ngo')}
                >
                  Continue as NGO
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold text-white mb-8">Platform Features</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-8 w-8 text-white mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">Blockchain Security</h4>
              <p className="text-white/80 text-sm">Immutable verification and transparent transactions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-white mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">AI Analytics</h4>
              <p className="text-white/80 text-sm">Smart carbon calculations and reduction insights</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="h-8 w-8 text-white mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">Community Impact</h4>
              <p className="text-white/80 text-sm">Direct support for local restoration projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;