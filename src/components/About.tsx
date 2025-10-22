import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Gitopadesh Global Sloka Competition
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            Inspired by the timeless wisdom of the Bhagavad Gita
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center bg-gradient-to-br from-white to-secondary/10 border-2 border-secondary/20 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-foreground">For Ages 6-17</h3>
              <p className="text-muted-foreground">
                Open to School-going Students Worldwide.<br />
                <span className="text-sm">(Individual and School Group)</span>
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-foreground">3-Minute Video</h3>
              <p className="text-muted-foreground">
                Submit a short video reciting and explaining a sloka
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-foreground">Exciting Prizes</h3>
              <p className="text-muted-foreground">
                Rolling Trophy, Certificates & medals will be given to all winners and runners-up
              </p>
            </Card>
          </div>

          {/* Details Section */}
          <div id="guidelines" className="space-y-12 pt-8">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              About the Competition
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white border-2 border-border hover:border-primary/30 transition-all">
                <h4 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
                  <span className="text-primary mr-2">•</span>
                  Objective
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  To inspire children globally to connect with the timeless wisdom of the Bhagavad Gita by learning, reciting, and reflecting on selected shlokas through a structured and inspiring Global Competition.
                </p>
              </Card>

              <Card className="p-8 bg-white border-2 border-border hover:border-primary/30 transition-all">
                <h4 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
                  <span className="text-secondary mr-2">•</span>
                  Eligibility
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Open to school-going children aged 6 to 17 years. Participants can enter individually or as part of a school team.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
