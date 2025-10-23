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
  theme: string;
  videoLink: string;
  slokaRecited: string;
}

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    childName: "",
    childAge: "",
    theme: "",
    videoLink: "",
    slokaRecited: ""
  });
  const { toast } = useToast();

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getThemesByAge = (age: string) => {
    const ageNum = parseInt(age);
    if (ageNum >= 6 && ageNum <= 8) {
      return [
        "Theme 1: Exploring Inner Potential",
        "Theme 2: Mastering Your Faculties",
        "Theme 3: Habit Formation",
        "Theme 4: Trigunas",
        "Theme 5: Unity in Diversity"
      ];
    } else if (ageNum >= 9 && ageNum <= 11) {
      return [
        "Theme 6: Self-Mastery",
        "Theme 7: Regulation of Mind",
        "Theme 8: Joyful Actions",
        "Theme 9: Altruistic Action",
        "Theme 10: Contentment"
      ];
    } else if (ageNum >= 12 && ageNum <= 14) {
      return [
        "Theme 11: Conduct",
        "Theme 12: Attitude Towards Food",
        "Theme 13: The Seed of All Life Force",
        "Theme 14: Source of Happiness",
        "Theme 15: Source of Wisdom"
      ];
    } else if (ageNum >= 15 && ageNum <= 17) {
      return [
        "Theme 16: The True Friend",
        "Theme 17: Role of a Guide",
        "Theme 18: Devotion in Action",
        "Theme 19: Power of Love",
        "Theme 20: Complete Harmony"
      ];
    }
    return [];
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.parentName && formData.parentEmail && formData.parentPhone);
      case 2:
        return !!(formData.childName && formData.childAge);
      case 3:
        return !!formData.theme;
      case 4:
        return !!(formData.videoLink && formData.slokaRecited);
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
              <span className={currentStep >= 3 ? "text-primary font-semibold" : "text-muted-foreground"}>Theme</span>
              <span className={currentStep >= 4 ? "text-primary font-semibold" : "text-muted-foreground"}>Video Details</span>
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

              {/* Step 3: Theme Selection */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 text-xl">📚</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Theme Selection</h3>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="theme" className="text-base font-medium flex items-center gap-2">
                      <span className="text-purple-600">📖</span>
                      Select Theme *
                    </Label>
                    <Select value={formData.theme} onValueChange={(value) => updateFormData("theme", value)}>
                      <SelectTrigger className="mt-2 h-12 bg-muted/30 border-2 focus:border-primary">
                        <SelectValue placeholder="Select a theme" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-2 z-50 max-h-[300px]">
                        {formData.childAge && getThemesByAge(formData.childAge).map((theme) => (
                          <SelectItem key={theme} value={theme}>
                            {theme}
                          </SelectItem>
                        ))}
                        {!formData.childAge && (
                          <SelectItem value="none" disabled>
                            Please select child's age first
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 4: Video Details */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <Label htmlFor="videoLink" className="text-base font-medium">Upload Your Video (Max 3 minutes, 200MB) *</Label>
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
                    <Label htmlFor="slokaRecited" className="text-base font-medium">Sloka/s recited by participant *</Label>
                    <Input
                      id="slokaRecited"
                      value={formData.slokaRecited}
                      onChange={(e) => updateFormData("slokaRecited", e.target.value)}
                      placeholder="e.g., Chapter 2, Verse 47 and Chapter 3, Verse 14"
                      className="mt-2 h-12 bg-muted/30 border-2 focus:border-primary"
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
