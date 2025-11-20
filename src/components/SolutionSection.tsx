import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Clock, Shield } from "lucide-react";

interface SolutionSectionProps {
  onBookConsultation: () => void;
}

const benefits = [
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Get personalized advice from AI automation experts"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Find solutions that work for your specific business needs"
  },
  {
    icon: Shield,
    title: "Risk-Free",
    description: "No commitment required - just honest advice"
  }
];

const SolutionSection = ({ onBookConsultation }: SolutionSectionProps) => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your First Step to a Simpler Business
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The first step is simple: Talk to us. No complex details, no technical knowledge needed. 
              Our experts will listen to your challenges and show you exactly how AI can help your specific business.
            </p>
            
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <div className="flex items-start space-x-4 mb-6">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="text-lg font-medium text-foreground mb-2">
                    Book a free, 30-minute consultation with our experts
                  </p>
                  <p className="text-muted-foreground">
                    We'll listen to your challenges and show you simple, actionable ways to get started. 
                    No sales pressure - just honest guidance tailored to your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-2xl shadow-card"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            variant="cta"
            size="xl"
            onClick={onBookConsultation}
            className="text-lg font-semibold"
          >
            Schedule My Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;