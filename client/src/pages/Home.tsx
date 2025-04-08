import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Upload, CheckCircle, Shield } from "lucide-react";
import { partnerLogos } from "../lib/data";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="block">Animal Identity Verification.</span>
              <span className="block text-primary">API-first. Developer Ready.</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-lg text-muted-foreground sm:max-w-3xl">
              A biometric identity platform for animals that lets your application reliably identify pets without storing their photos.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/api">
                <Button size="lg" className="px-8">
                  View Docs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* 3-step explanation */}
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
              {/* Enroll */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-4 inline-flex">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">1. Enroll</h3>
                <p className="mt-2 text-muted-foreground">
                  Submit a photo of an animal to create a unique biometric identity profile.
                </p>
              </div>
              
              {/* Verify */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-4 inline-flex">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">2. Verify</h3>
                <p className="mt-2 text-muted-foreground">
                  Match new images against existing profiles to confirm an animal's identity.
                </p>
              </div>
              
              {/* Authenticate */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-4 inline-flex">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">3. Authenticate</h3>
                <p className="mt-2 text-muted-foreground">
                  Securely link identity profiles across your application ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-20">
            <p className="text-sm text-center font-medium text-muted-foreground uppercase tracking-wider">
              Trusted by leading pet applications
            </p>
            <div className="mt-6 flex justify-center">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 opacity-70">
                {partnerLogos.map((logo) => (
                  <div key={logo.id} className="flex justify-center items-center h-12 grayscale">
                    <div className="h-8 w-24 bg-accent rounded flex items-center justify-center text-muted-foreground">
                      {logo.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent text-muted-foreground">
                <span className="mr-2">Now available for</span>
                <Badge variant="secondary" className="mr-1">Dogs</Badge>
                <Badge variant="secondary" className="mr-1">Cats</Badge>
                <Badge variant="secondary">Horses</Badge>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-foreground">Ready to add animal identity to your app?</h2>
              <p className="mt-2 text-muted-foreground">Integrate our API in minutes, not days.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/api">
                <Button className="w-full sm:w-auto">
                  Start Building <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
