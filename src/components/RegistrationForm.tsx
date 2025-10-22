import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  childName: string;
  childAge: string;
  videoLink: string;
  experience: string;
}

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    childName: "",
    childAge: "",
    videoLink: "",
    experience: ""
  });
  const { toast } = useToast();

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.parentName && formData.parentEmail && formData.parentPhone);
      case 2:
        return !!(formData.childName && formData.childAge);
      case 3:
        return !!(formData.videoLink && formData.experience);
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      toast({
        title: "Registration Successful! 🎉",
        description: "Thank you for registering. We'll contact you soon.",
      });
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section id="registration-form" className="py-20 bg-gradient-to-br from-secondary/10 via-muted/20 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Register Now
            </h2>
            <p className="text-muted-foreground text-lg">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary via-accent to-success transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-3 text-sm">
              <span className={currentStep >= 1 ? "text-primary font-semibold" : "text-muted-foreground"}>Parent Info</span>
              <span className={currentStep >= 2 ? "text-primary font-semibold" : "text-muted-foreground"}>Child Info</span>
              <span className={currentStep >= 3 ? "text-primary font-semibold" : "text-muted-foreground"}>Competition Details</span>
            </div>
          </div>

          <Card className="p-8 shadow-2xl border-2 border-primary/10 bg-white">
            <form className="space-y-6">
              {/* Step 1: Parent Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <Label htmlFor="parentName" className="text-base font-medium">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => updateFormData("parentName", e.target.value)}
                      placeholder="Enter full name"
                      className="mt-2 h-12 bg-muted/30 border-2 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="parentEmail" className="text-base font-medium">Email Address *</Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) => updateFormData("parentEmail", e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-2 h-12 bg-muted/30 border-2 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="parentPhone" className="text-base font-medium">Phone Number *</Label>
                    <Input
                      id="parentPhone"
                      type="tel"
                      value={formData.parentPhone}
                      onChange={(e) => updateFormData("parentPhone", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="mt-2 h-12 bg-muted/30 border-2 focus:border-primary"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Child Information */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <Label htmlFor="childName" className="text-base font-medium">Child's Full Name *</Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) => updateFormData("childName", e.target.value)}
                      placeholder="Enter child's full name"
                      className="mt-2 h-12 bg-muted/30 border-2 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="childAge" className="text-base font-medium">Child's Age *</Label>
                    <Select value={formData.childAge} onValueChange={(value) => updateFormData("childAge", value)}>
                      <SelectTrigger className="mt-2 h-12 bg-muted/30 border-2 focus:border-primary">
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-2 z-50">
                        {Array.from({ length: 12 }, (_, i) => i + 6).map((age) => (
                          <SelectItem key={age} value={age.toString()}>
                            {age} years old
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 3: Competition Details */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <Label htmlFor="videoLink" className="text-base font-medium">Video Submission Link *</Label>
                    <Input
                      id="videoLink"
                      type="url"
                      value={formData.videoLink}
                      onChange={(e) => updateFormData("videoLink", e.target.value)}
                      placeholder="https://youtube.com/watch?v=..."
                      className="mt-2 h-12 bg-muted/30 border-2 focus:border-primary"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Upload your 3-minute recitation video to YouTube or Vimeo
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="experience" className="text-base font-medium">Previous Experience *</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => updateFormData("experience", e.target.value)}
                      placeholder="Tell us about your child's experience with Bhagavad Gita..."
                      className="mt-2 min-h-[120px] bg-muted/30 border-2 focus:border-primary"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t border-border">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="px-6 border-2"
                  >
                    <ChevronLeft className="mr-2 w-4 h-4" />
                    Back
                  </Button>
                )}

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto px-6 bg-primary hover:bg-primary/90"
                  >
                    Next
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    className="ml-auto px-8 bg-success hover:bg-success/90"
                  >
                    <Check className="mr-2 w-4 h-4" />
                    Submit Registration
                  </Button>
                )}
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
