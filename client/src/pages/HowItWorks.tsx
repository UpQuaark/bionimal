import { 
  Camera, 
  Code, 
  ArrowRight, 
  Lock, 
  Users, 
  Beaker, 
  ArrowLeftRight,
  ChevronRight,
  Shield
} from "lucide-react";
import { keyFeatures } from "../lib/data";

export default function HowItWorks() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            How It Works
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Bionimal uses advanced computer vision to create unique identification profiles for animals.
          </p>
        </div>

        {/* Identity Lifecycle Diagram */}
        <div className="mt-16 relative">
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-xl border border-border">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12">
              {/* Photo step */}
              <div className="text-center">
                <div className="bg-accent rounded-lg p-4 inline-flex items-center justify-center">
                  <Camera className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">Animal Photo</h3>
                <p className="mt-2 text-sm text-muted-foreground">Submit a clear image of the animal's face</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-muted-foreground">
                <ArrowRight className="h-8 w-8" />
              </div>
              <div className="block md:hidden text-muted-foreground rotate-90">
                <ArrowRight className="h-8 w-8" />
              </div>

              {/* Biometric hash step */}
              <div className="text-center">
                <div className="bg-accent rounded-lg p-4 inline-flex items-center justify-center">
                  <Code className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">Biometric Hash</h3>
                <p className="mt-2 text-sm text-muted-foreground">AI converts facial features to encrypted vector data</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-muted-foreground">
                <ArrowRight className="h-8 w-8" />
              </div>
              <div className="block md:hidden text-muted-foreground rotate-90">
                <ArrowRight className="h-8 w-8" />
              </div>

              {/* Verification step */}
              <div className="text-center">
                <div className="bg-accent rounded-lg p-4 inline-flex items-center justify-center">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">Verification</h3>
                <p className="mt-2 text-sm text-muted-foreground">Match new photos against existing profiles</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-foreground">What Developers Send</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex">
                <ChevronRight className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="ml-3 text-muted-foreground">
                  Pet photos during enrollment or verification
                </p>
              </li>
              <li className="flex">
                <ChevronRight className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="ml-3 text-muted-foreground">
                  Optional metadata like species, breed, or age
                </p>
              </li>
              <li className="flex">
                <ChevronRight className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="ml-3 text-muted-foreground">
                  Authentication credentials
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground">What Developers Receive</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex">
                <ChevronRight className="h-6 w-6 text-secondary flex-shrink-0" />
                <p className="ml-3 text-muted-foreground">
                  Unique biometric ID for the animal
                </p>
              </li>
              <li className="flex">
                <ChevronRight className="h-6 w-6 text-secondary flex-shrink-0" />
                <p className="ml-3 text-muted-foreground">
                  Match confidence scores for verification requests
                </p>
              </li>
              <li className="flex">
                <ChevronRight className="h-6 w-6 text-secondary flex-shrink-0" />
                <p className="ml-3 text-muted-foreground">
                  Status codes and error information
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-10">Key Features</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyFeatures.map((feature, index) => {
              const IconComponent = {
                "lock": Lock,
                "users": Users,
                "beaker": Beaker,
                "switch-horizontal": ArrowLeftRight
              }[feature.icon] || Lock;

              return (
                <div key={index} className="bg-card rounded-lg p-6 shadow-md border border-border">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium text-foreground">{feature.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
