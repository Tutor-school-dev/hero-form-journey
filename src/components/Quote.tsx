const Quote = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-white to-muted/20 relative overflow-hidden">
      {/* Decorative feather */}
      <div className="absolute top-10 right-10 text-6xl opacity-20">🪶</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Timeless Wisdom of Bhagavad Gita
          </h2>

          <blockquote className="text-xl md:text-2xl lg:text-3xl italic text-foreground/80 leading-relaxed font-serif border-l-4 border-primary pl-6">
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
