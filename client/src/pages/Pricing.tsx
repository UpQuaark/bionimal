import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { pricingPlans } from "../lib/data";

export default function Pricing() {
  return (
    <div className="pt-24 pb-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Flexible plans to support your app at any scale.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-lg shadow-xl overflow-hidden border ${
                plan.popular ? 'border-2 border-primary relative' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0">
                  <div className="inline-block bg-primary px-4 py-1 text-sm font-semibold uppercase text-white rounded-b-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <div className={`px-6 py-8 ${plan.popular ? 'pt-12' : ''}`}>
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="ml-1 text-xl text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-5 text-lg text-muted-foreground">{plan.description}</p>
              </div>
              <div className="px-6 pt-6 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                      <span className="ml-3 text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button 
                      className="w-full" 
                      variant={plan.name === "Enterprise" ? "outline" : "default"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            All plans include unlimited pet profiles, secure data storage, and no limits on the number of apps or integrations.
          </p>
        </div>
        
        {/* Enterprise features */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-foreground text-center mb-10">
            Enterprise Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-medium text-foreground">Dedicated Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get priority support with a dedicated account manager and technical contact available 24/7.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-medium text-foreground">Custom Integration</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our engineers will work directly with your team to ensure a smooth integration tailored to your specific needs.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-medium text-foreground">SLA Guarantees</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Service Level Agreements with guaranteed uptime, response times, and performance metrics.
              </p>
            </div>
          </div>
        </div>
        
        {/* Volume pricing */}
        <div className="mt-20 bg-card rounded-lg p-8 border border-border">
          <h2 className="text-xl font-medium text-foreground mb-6">Need high-volume pricing?</h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-muted-foreground mb-4 md:mb-0 md:mr-6">
              If you need more than 50,000 API calls per month, we offer custom volume pricing plans with significant discounts.
            </p>
            <Link href="/contact">
              <Button>Contact Sales</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
