import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ConsultationForm from "@/components/ConsultationForm";
import Header from "@/components/Header";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection onBookConsultation={scrollToForm} />
      <ProblemSection />
      <SolutionSection onBookConsultation={scrollToForm} />
      <ConsultationForm />
    </div>
  );
};

export default Index;
