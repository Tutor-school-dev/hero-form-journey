import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Quote from "@/components/Quote";
import Prizes from "@/components/Prizes";
import Courses from "@/components/Courses";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import FloatingSubmitButton from "@/components/FloatingSubmitButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Quote />
      <Prizes />
      <Courses />
      <RegistrationForm />
      <FAQ />
      <FloatingSubmitButton />
    </main>
  );
};

export default Index;
