import { Card } from "@/components/ui/card";
import { Trophy, Award, Gift } from "lucide-react";

const Prizes = () => {
  const prizes = [
    {
      icon: Trophy,
      title: "Rolling Trophies",
      description: "Beautiful trophies for category winners",
      gradient: "from-accent to-primary"
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Participation certificates for all contestants",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Gift,
      title: "Attractive Prizes",
      description: "Exciting rewards for top performers",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Exciting Prizes
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Recognition and rewards for all participants and winners
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {prizes.map((prize, index) => {
              const Icon = prize.icon;
              return (
                <Card 
                  key={index}
                  className="group relative overflow-hidden p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 hover:-translate-y-2"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon Container */}
                  <div className="relative mb-6 flex justify-center">
                    <div className={`bg-gradient-to-br ${prize.gradient} p-6 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {prize.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {prize.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
