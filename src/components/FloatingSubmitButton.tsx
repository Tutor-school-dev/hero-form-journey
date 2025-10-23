import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingSubmitButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById("registration-form");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToForm}
      className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-6 shadow-lg animate-pulse hover:animate-none transition-all"
      size="lg"
    >
      <span className="mr-2">Submit Entry</span>
      <ArrowUp className="w-5 h-5 rotate-180" />
    </Button>
  );
};

export default FloatingSubmitButton;
