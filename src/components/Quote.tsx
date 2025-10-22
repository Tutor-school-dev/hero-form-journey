import { Quote as QuoteIcon } from "lucide-react";

const Quote = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-full shadow-lg">
              <QuoteIcon className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Timeless Wisdom of Bhagavad Gita
          </h2>

          <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-foreground/90 leading-relaxed">
            "Set thy heart upon thy work, but never on its reward.<br />
            Work not for a reward; but never cease to do thy work."
          </blockquote>

          <div className="pt-4">
            <p className="text-lg text-muted-foreground font-medium">
              — Bhagavad Gita, Chapter 2, Verse 47
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
