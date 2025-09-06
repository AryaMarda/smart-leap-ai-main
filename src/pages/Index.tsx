import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ConsultationForm from "@/components/ConsultationForm";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onBookConsultation={scrollToForm} />
      <ProblemSection />
      <SolutionSection onBookConsultation={scrollToForm} />
      <ConsultationForm />
    </div>
  );
};

export default Index;
