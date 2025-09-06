import heroImage from "@/assets/hero-process-transformation.jpg";

interface HeroSectionProps {
  onBookConsultation: () => void;
}

const HeroSection = ({ onBookConsultation }: HeroSectionProps) => {
  return (
    <section className="relative py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Is Your Business Keeping You{" "}
                <span className="text-primary">Too Busy</span> to Grow?
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                AI can solve your most time-consuming tasks. We'll show you how.
              </p>
            </div>
            
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Free 30-minute consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>No technical knowledge needed</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Abstract graphic showing transformation from chaotic manual business processes to streamlined AI automation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating success indicator */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-2xl shadow-card transform rotate-3">
              <div className="text-center">
                <div className="text-2xl font-bold">✓</div>
                <div className="text-sm font-medium">Simple Solution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;