import { Phone, FileText, RotateCcw, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Phone,
    title: "Too many customer calls and WhatsApp messages",
    description: "Spending hours responding to the same questions over and over"
  },
  {
    icon: FileText,
    title: "Manual data entry eating up your day",
    description: "Typing the same information into multiple systems"
  },
  {
    icon: RotateCcw,
    title: "Wasting time on repetitive tasks",
    description: "Doing the same boring work instead of growing your business"
  },
  {
    icon: DollarSign,
    title: "Struggling to manage your business finances",
    description: "Keeping track of expenses, invoices, and payments manually"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Are These Your Daily Headaches?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-card rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You're not alone. These are the most common challenges we help Indian business owners solve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;