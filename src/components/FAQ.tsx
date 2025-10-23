import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What is TutorSchool?",
      answer: "TutorSchool is a platform that connects students with the best tutors for both offline and online learning. We help parents find verified and experienced tutors who match their child's learning style and pace."
    },
    {
      question: "How does TutorSchool help my child learn better?",
      answer: "Every child learns differently — so we don't believe in \"one-size-fits-all\" teaching. TutorSchool helps you choose tutors based on your child's needs, offers demo classes, regular assessments, and personal learning reports to track progress."
    },
    {
      question: "Can I choose between online and offline tutoring?",
      answer: "Yes! TutorSchool offers both options:\n• Offline tutoring – in your city, at your convenience.\n• Online tutoring – from top tutors across India, including IITs and NITs."
    },
    {
      question: "How do I find a tutor for my child?",
      answer: "Simply share your requirements — subject, class, board, location, and learning goals. Our team shortlists the best tutors for you. You can try demo classes before finalizing."
    },
    {
      question: "Are TutorSchool tutors verified?",
      answer: "Yes, every tutor on our platform goes through a strict screening and verification process that checks qualifications, teaching experience, and background."
    },
    {
      question: "What subjects and classes do you cover?",
      answer: "TutorSchool covers all academic boards (CBSE, ICSE, State Boards, IB, Cambridge) and all classes (KG to Class 12). We also offer tutors for Olympiad prep, JEE/NEET coaching, coding, languages, and skill-based learning."
    },
    {
      question: "How do I track my child's progress?",
      answer: "TutorSchool provides regular assessments, parent feedback reports, and counseling sessions to ensure your child is improving consistently."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about TutorSchool
            </p>
          </div>

          <Card className="p-6 shadow-lg border-2 border-primary/10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {index + 1}. {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
