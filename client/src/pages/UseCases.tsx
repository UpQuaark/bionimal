import { 
  Smartphone, 
  Building2, 
  FileText, 
  ArrowLeftRight,
  CheckCircle
} from "lucide-react";
import { useCases } from "../lib/data";

export default function UseCases() {
  return (
    <div className="pt-24 pb-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Use Cases
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Enhance your animal-related applications with reliable identity verification.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => {
            const IconComponent = {
              "device-mobile": Smartphone,
              "building-store": Building2,
              "file-text": FileText,
              "switch-horizontal": ArrowLeftRight
            }[useCase.icon] || Smartphone;
            
            return (
              <div key={index} className="bg-card rounded-lg p-6 shadow-md border border-border">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-foreground">{useCase.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {useCase.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {useCase.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        {/* Integration examples */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground text-center mb-10">
            Integration Stories
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4">PetConnect App</h3>
              <p className="text-muted-foreground mb-4">
                PetConnect integrated Bionimal to verify pet identities during sign-up, reducing fake profiles by 98% and increasing user trust.
              </p>
              <div className="bg-accent/50 p-4 rounded-lg text-sm text-muted-foreground italic">
                "Implementing Bionimal's API was straightforward and immediately improved our platform's credibility. Our users appreciate the extra security, and we've seen a 32% increase in premium subscriptions."
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                — CTO, PetConnect
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4">SafePet Rescue Network</h3>
              <p className="text-muted-foreground mb-4">
                A nationwide rescue organization uses Bionimal to track animals across different shelters, reducing identity mistakes and improving adoption outcomes.
              </p>
              <div className="bg-accent/50 p-4 rounded-lg text-sm text-muted-foreground italic">
                "Before Bionimal, we relied on manual record keeping and microchips. Now we have a digital identity system that works across our entire network of 50+ shelters, dramatically improving our coordination and reducing errors."
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                — Operations Director, SafePet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
