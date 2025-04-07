import { useState } from "react";
import { Link } from "wouter";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { faqItems } from "../lib/data";

export default function Faq() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything developers need to know about implementing Bionimal.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible value={openItem || undefined} onValueChange={(value) => setOpenItem(value)}>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-accent rounded-lg overflow-hidden mb-4 border border-border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-accent/80">
                  <h3 className="text-lg font-medium text-foreground">{item.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <Link href="/api">
            <span className="text-primary hover:text-primary/80 inline-flex items-center cursor-pointer">
              View all 21 FAQs in our documentation <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
        </div>
        
        {/* Additional resources */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-foreground text-center mb-10">
            Still Have Questions?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-accent rounded-lg p-6 border border-border">
              <h3 className="text-lg font-medium text-foreground mb-4">Technical Support</h3>
              <p className="text-muted-foreground mb-4">
                Our developer support team is available to help with technical questions and implementation challenges.
              </p>
              <Link href="/contact">
                <span className="text-primary hover:text-primary/80 inline-flex items-center cursor-pointer">
                  Contact Support <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
            
            <div className="bg-accent rounded-lg p-6 border border-border">
              <h3 className="text-lg font-medium text-foreground mb-4">Schedule a Demo</h3>
              <p className="text-muted-foreground mb-4">
                See Bionimal in action with a personalized demo tailored to your use case.
              </p>
              <Link href="/contact">
                <span className="text-primary hover:text-primary/80 inline-flex items-center cursor-pointer">
                  Book a Demo <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
