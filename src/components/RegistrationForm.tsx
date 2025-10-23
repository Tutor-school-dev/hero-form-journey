import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { VideoUpload } from "./VideoUpload";
import { use_form_submit } from "./hooks/use_form_submit";
import { LoadingButton } from "./ui/LoadingState";

export type FormData = {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  childName: string;
  childAge: string;
  theme: string;
  video: string;
  slokaRecited: string;
}

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    childName: "",
    childAge: "",
    theme: "",
    video: "",
    slokaRecited: ""
  });
  const { toast } = useToast();
  const { form_submit_hook, loading, Progress } = use_form_submit()

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
        return !!(formData.video && formData.slokaRecited);
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

  const handleVideoSelect = (Video: any) => {
    setSelectedVideo(Video)
    if (Video) {
      updateFormData("video", Video)
    }
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      form_submit_hook(formData);
      toast({
        title: "Registration Successful! 🎉",
        description: "Thank you for registering. We'll contact you soon.",
      });
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section id="registration-form" className="bg-gradient-to-br from-secondary/10 via-muted/20 to-white py-20">
      <div className="mx-auto px-4 container">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-foreground text-4xl md:text-5xl">
              Register Now
            </h2>
            <p className="text-muted-foreground text-lg">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="bg-muted rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary via-accent to-success h-full transition-all duration-500 ease-out"
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

          <Card className="bg-white shadow-2xl p-8 border-2 border-primary/10">
            <form className="space-y-6">
              {/* Step 1: Parent Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <Label htmlFor="parentName" className="font-medium text-base">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => updateFormData("parentName", e.target.value)}
                      placeholder="Enter full name"
                      className="bg-muted/30 mt-2 border-2 focus:border-primary h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="parentEmail" className="font-medium text-base">Email Address *</Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) => updateFormData("parentEmail", e.target.value)}
                      placeholder="your.email@example.com"
                      className="bg-muted/30 mt-2 border-2 focus:border-primary h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="parentPhone" className="font-medium text-base">Phone Number *</Label>
                    <Input
                      id="parentPhone"
                      type="tel"
                      maxLength={10}
                      value={formData.parentPhone}
                      onChange={(e) => updateFormData("parentPhone", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="bg-muted/30 mt-2 border-2 focus:border-primary h-12"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Child Information */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <Label htmlFor="childName" className="font-medium text-base">Child's Full Name *</Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) => updateFormData("childName", e.target.value)}
                      placeholder="Enter child's full name"
                      className="bg-muted/30 mt-2 border-2 focus:border-primary h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="childAge" className="font-medium text-base">Child's Age *</Label>
                    <Select value={formData.childAge} onValueChange={(value) => updateFormData("childAge", value)}>
                      <SelectTrigger className="bg-muted/30 mt-2 border-2 focus:border-primary h-12">
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent className="z-50 bg-white border-2">
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
                      <div className="flex justify-center items-center bg-purple-100 rounded-full w-10 h-10">
                        <span className="text-purple-600 text-xl">📚</span>
                      </div>
                      <h3 className="font-bold text-foreground text-xl">Theme Selection</h3>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="theme" className="flex items-center gap-2 font-medium text-base">
                      <span className="text-purple-600">📖</span>
                      Select Theme *
                    </Label>
                    <Select value={formData.theme} onValueChange={(value) => updateFormData("theme", value)}>
                      <SelectTrigger className="bg-muted/30 mt-2 border-2 focus:border-primary h-12">
                        <SelectValue placeholder="Select a theme" />
                      </SelectTrigger>
                      <SelectContent className="z-50 bg-white border-2 max-h-[300px]">
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
                    <Label htmlFor="videoLink" className="font-medium text-base">Upload Your Video (Max 3 minutes, 200MB) *</Label>
                    {/* <Input
                      id="videoLink"
                      type="url"
                      value={formData.videoLink}
                      onChange={(e) => updateFormData("videoLink", e.target.value)}
                      placeholder="https://youtube.com/watch?v=..."
                      className="bg-muted/30 mt-2 border-2 focus:border-primary h-12"
                    /> */}
                    <VideoUpload
                      onFileSelect={handleVideoSelect}
                      selectedFile={selectedVideo}
                    />
                    
                    <p className="mt-2 text-muted-foreground text-sm">
                      Upload your 3-minute recitation video to YouTube or Vimeo
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="slokaRecited" className="font-medium text-base">Sloka/s recited by participant *</Label>
                    <Input
                      id="slokaRecited"
                      value={formData.slokaRecited}
                      onChange={(e) => updateFormData("slokaRecited", e.target.value)}
                      placeholder="e.g., Chapter 2, Verse 47 and Chapter 3, Verse 14"
                      className="bg-muted/30 mt-2 border-2 focus:border-primary h-12"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-border border-t">
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
                    className="bg-primary hover:bg-primary/90 ml-auto px-6"
                  >
                    Next
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <LoadingButton isLoading={loading} onClick={handleSubmit} className="bg-green-400">
                    <Check className="mr-2 w-4 h-4" />
                    Submit Registration
                  </LoadingButton>
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
