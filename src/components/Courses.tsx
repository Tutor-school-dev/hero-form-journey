import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Mic, Heart, Star } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "Bhagavad Gita for Beginners",
      description: "Start your journey with foundational teachings",
      rating: 4.8
    },
    {
      icon: Mic,
      title: "Advanced Sloka Recitation",
      description: "Master pronunciation and rhythm",
      rating: 4.9
    },
    {
      icon: Heart,
      title: "Understanding Karma Yoga",
      description: "Explore the path of selfless action",
      rating: 4.7
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Explore Our Courses
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Deepen your understanding and prepare for the competition
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card 
                  key={index}
                  className="group p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/40 bg-gradient-to-br from-card to-background"
                >
                  <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-secondary transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 fill-accent text-accent" />
                      <span className="font-semibold text-foreground">{course.rating}</span>
                    </div>
                    <Button variant="ghost" className="text-secondary hover:text-secondary hover:bg-secondary/10">
                      Learn More →
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
