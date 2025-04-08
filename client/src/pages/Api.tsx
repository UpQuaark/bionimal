import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FileText, Download, Code } from "lucide-react";
import { apiEndpoints } from "../lib/data";

export default function Api() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            API for Developers
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            RESTful endpoints for easy integration with your application.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Endpoint Examples</h3>
            
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="code-sample mb-6 border border-border">
                <div className="flex items-center mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    endpoint.method === "POST" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-secondary/20 text-secondary"
                  }`}>
                    {endpoint.method}
                  </span>
                  <span className="ml-2 text-muted-foreground text-sm font-mono">{endpoint.endpoint}</span>
                </div>
                <pre className="text-sm text-muted-foreground">
  <span className="text-muted-foreground/70">// Request</span>
  {endpoint.request}

  <span className="text-muted-foreground/70">// Response</span>
  {endpoint.response}
                </pre>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Authentication</h3>
            <div className="bg-accent rounded-lg p-6 border border-border">
              <h4 className="text-lg font-medium text-foreground">API Key Authentication</h4>
              <p className="mt-2 text-muted-foreground">Secure your API requests with a unique API key.</p>
              
              <div className="mt-4 code-sample border border-border/50">
                <pre className="text-sm text-muted-foreground">
  <span className="text-muted-foreground/70">// Headers</span>
  {`{
  "Authorization": "Bearer YOUR_API_KEY",
  "Content-Type": "application/json"
}`}
                </pre>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-medium text-foreground">OAuth 2.0 (Enterprise)</h4>
                <p className="mt-2 text-muted-foreground">For advanced integrations, we support OAuth 2.0 authentication flow.</p>
              </div>
            </div>

            <div className="mt-8 bg-accent rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Developer Resources</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <FileText className="h-6 w-6 text-primary" />
                  <a href="#" className="ml-3 text-primary hover:text-primary/80">
                    API Documentation
                  </a>
                </li>
                <li className="flex">
                  <Download className="h-6 w-6 text-primary" />
                  <a href="#" className="ml-3 text-primary hover:text-primary/80">
                    Postman Collection
                  </a>
                </li>
                <li className="flex">
                  <Code className="h-6 w-6 text-primary" />
                  <a href="#" className="ml-3 text-primary hover:text-primary/80">
                    GitHub SDKs (Coming Soon)
                  </a>
                </li>
              </ul>
              
              <div className="mt-6">
                <Link href="/contact">
                  <Button>
                    Request Sandbox Access
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* SDK section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-10">SDK Examples</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="code-sample border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">JavaScript SDK</span>
              </div>
              <pre className="text-sm text-muted-foreground">
  {`// Installation
  npm install @bionimal/js-sdk

  // Usage
  import { Bionimal } from '@bionimal/js-sdk';

  const bionimal = new Bionimal('YOUR_API_KEY');
  
  // Enroll an animal
  async function enrollAnimal(imageFile) {
    const result = await bionimal.enroll({
      image: imageFile,
      species: 'dog',
      metadata: { breed: 'labrador', age: 3 }
    });
    
    console.log(result.animal_id);
  }`}
              </pre>
            </div>
            
            <div className="code-sample border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Python SDK</span>
              </div>
              <pre className="text-sm text-muted-foreground">
  {`# Installation
  pip install bionimal

  # Usage
  from bionimal import Bionimal
  
  bionimal = Bionimal('YOUR_API_KEY')
  
  # Verify an animal
  def verify_animal(image_path, animal_id):
      result = bionimal.verify(
          image_path=image_path,
          animal_id=animal_id
      )
      
      if result.match:
          print(f"Match confirmed with confidence: {result.confidence}")
      else:
          print("No match found")`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
