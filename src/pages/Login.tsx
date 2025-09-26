import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Leaf, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const role = searchParams.get('role') || 'corporate';
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    organizationName: '',
    contactPerson: ''
  });

  useEffect(() => {
    if (!role || !['corporate', 'ngo'].includes(role)) {
      navigate('/');
    }
  }, [role, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast({
        title: "Error", 
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    // Simulate successful authentication
    toast({
      title: "Success",
      description: `${isLogin ? 'Logged in' : 'Account created'} successfully!`
    });

    // Navigate to appropriate dashboard
    setTimeout(() => {
      navigate(role === 'corporate' ? '/corporate-dashboard' : '/ngo-dashboard');
    }, 1000);
  };

  const roleConfig = {
    corporate: {
      icon: Building2,
      title: "Corporate Login",
      description: "Access your carbon footprint analytics and credit marketplace",
      gradient: "gradient-ocean",
      color: "text-ocean-blue"
    },
    ngo: {
      icon: Leaf,
      title: "NGO Login", 
      description: "Manage your blue carbon projects and credit issuance",
      gradient: "gradient-nature",
      color: "text-nature-green"
    }
  };

  const config = roleConfig[role as keyof typeof roleConfig];
  const IconComponent = config.icon;

  return (
    <div className="min-h-screen gradient-sky flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-nature-green rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-ocean-blue rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6 text-white hover:bg-white/10"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Card className="eco-card bg-white/95 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center pb-6">
            <div className={`${config.gradient} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 glow-ocean`}>
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <CardTitle className={`text-2xl font-bold ${config.color}`}>
              {config.title}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {config.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="eco-input"
                  required
                />
              </div>

              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="organizationName">
                      {role === 'corporate' ? 'Company Name' : 'Organization Name'}
                    </Label>
                    <Input
                      id="organizationName"
                      name="organizationName"
                      placeholder={`Enter ${role === 'corporate' ? 'company' : 'organization'} name`}
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="eco-input"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person</Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      placeholder="Enter contact person name"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="eco-input"
                      required
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="eco-input pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="eco-input"
                    required
                  />
                </div>
              )}

              <Button 
                type="submit" 
                className={`w-full ${config.gradient} text-white hover:opacity-90 transition-eco`}
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Button
                variant="link"
                className={`${config.color} hover:underline`}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"
                }
              </Button>
            </div>

            {/* Demo Login Info */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Demo Login:</strong><br />
                Email: demo@{role}.com<br />
                Password: demo123
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;