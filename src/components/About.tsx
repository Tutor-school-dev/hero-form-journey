import { Card } from "@/components/ui/card";
import { Target, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            About the Competition
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            A global platform for young minds to connect with ancient wisdom
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Objective Card */}
            <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Objective</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Promote understanding of Bhagavad Gita teachings among youth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Develop memorization and recitation skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Foster spiritual growth and cultural awareness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Build confidence through public speaking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Eligibility Card */}
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/5 border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg group">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-xl group-hover:bg-secondary/20 transition-colors">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Eligibility</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Open to children aged 6-17 years</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>All nationalities welcome to participate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Submit a 3-minute video reciting selected slokas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Video must be in clear audio and video quality</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
