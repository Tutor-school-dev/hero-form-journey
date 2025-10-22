import Hero from "@/components/Hero";
import About from "@/components/About";
import Quote from "@/components/Quote";
import Prizes from "@/components/Prizes";
import Courses from "@/components/Courses";
import RegistrationForm from "@/components/RegistrationForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Quote />
      <Prizes />
      <Courses />
      <RegistrationForm />
    </main>
  );
};

export default Index;
