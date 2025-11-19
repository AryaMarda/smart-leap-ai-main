import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  businessName: string;
  industry: string;
  email: string;
  whatsappNumber: string;
}

const industries = [
  "Retail/Shop",
  "Restaurant/Food",
  "Manufacturing",
  "Trading/Import-Export",
  "Services",
  "Healthcare",
  "Education/Training",
  "Real Estate",
  "Transportation",
  "Agriculture",
  "Technology",
  "Other"
];

const ConsultationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    businessName: "",
    industry: "",
    email: "",
    whatsappNumber: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("formdata: ", formData);
    
    // Basic validation
    if (!formData.name || !formData.businessName || !formData.industry || !formData.whatsappNumber || !formData.email) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to book your consultation.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://vanshmarda123.app.n8n.cloud/webhook/d79100e8-0296-4533-bf6e-ae5e9a0c8b9e", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Consultation Booked Successfully!",
          description: "We will contact you via WhatsApp within 24 hours to finalize your consultation time.",
        });
        // Reset form
        setFormData({
          name: "",
          businessName: "",
          industry: "",
          email: "",
          whatsappNumber: ""
        });
      } else {
        toast({
          title: "Error submitting form",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.log(error)
      toast({
        title: "Error submitting form",
        description: "Please check your internet connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="consultation-form" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Schedule Your Free Consultation
            </h2>
            <p className="text-lg text-muted-foreground">
              Take the first step towards a simpler, more efficient business
            </p>
          </div>
          
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Book Your Free 30-Minute Call</CardTitle>
              <CardDescription className="text-base">
                Our experts will help you identify the best AI solutions for your specific business needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-12"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-sm font-medium text-foreground">
                    Business Name *
                  </Label>
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="Enter your business name"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                    className="h-12"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-sm font-medium text-foreground">
                    Business Industry *
                  </Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => handleInputChange("industry", value)}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="whatsappNumber" className="text-sm font-medium text-foreground">
                    WhatsApp Number *
                  </Label>
                  <Input
                    id="whatsappNumber"
                    type="tel"
                    placeholder="9876543210"
                    value={formData.whatsappNumber}
                    onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
                    className="h-12"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking Consultation..." : "Book Consultation Now"}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  We will contact you via WhatsApp within 24 hours to finalize your consultation time. 
                  All information is kept confidential.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;