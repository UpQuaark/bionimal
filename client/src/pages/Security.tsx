import { 
  Shield, 
  FileText, 
  Camera, 
  Lock, 
  Zap,
  CheckCircle
} from "lucide-react";
import { securityFeatures } from "../lib/data";

export default function Security() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Security & Compliance
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Enterprise-grade security for your animal identity data.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-accent rounded-lg p-8 relative overflow-hidden border border-border">
            <div className="relative z-10">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Data Security</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {securityFeatures.dataSecurity.map((feature, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10">
              <Shield className="w-full h-full" />
            </div>
          </div>

          <div className="bg-accent rounded-lg p-8 relative overflow-hidden border border-border">
            <div className="relative z-10">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Compliance</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {securityFeatures.compliance.map((feature, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10">
              <FileText className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-accent rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Data Lifecycle</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityFeatures.dataLifecycle.map((feature, index) => {
                const icons = [Camera, Lock, Zap];
                const IconComponent = icons[index] || Lock;
                
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto bg-card rounded-full p-4 w-16 h-16 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="mt-4 text-lg font-medium text-foreground">{feature.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Privacy commitments */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-10">Our Privacy Commitments</h3>
          
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-foreground">Privacy by Design</h4>
                <p className="mt-2 text-muted-foreground">
                  Our platform was built from the ground up with privacy as a core principle. We minimize data collection, encrypt all stored information, and provide transparent data handling policies.
                </p>
                
                <h4 className="mt-6 text-lg font-medium text-foreground">Data Portability</h4>
                <p className="mt-2 text-muted-foreground">
                  Enterprise customers can request exports of their data at any time. We provide structured formats that make it easy to transfer or backup your information.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-foreground">Security Monitoring</h4>
                <p className="mt-2 text-muted-foreground">
                  We employ continuous security monitoring with automated systems and regular human reviews to detect and prevent unauthorized access attempts.
                </p>
                
                <h4 className="mt-6 text-lg font-medium text-foreground">Responsible Disclosure</h4>
                <p className="mt-2 text-muted-foreground">
                  We maintain an active bug bounty program and responsible disclosure policy to encourage security researchers to report vulnerabilities safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
