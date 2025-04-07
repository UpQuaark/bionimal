import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(1, {
    message: "Company name is required.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  sandbox: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      sandbox: false,
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", data);
      
      toast({
        title: "Demo request received",
        description: "We'll be in touch with you shortly!",
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div className="pt-24 pb-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Ready to Get Started?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Book a demo or request sandbox access to see Bionimal in action.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <div className="bg-card rounded-lg shadow-xl p-8 border border-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company / App Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company or app" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How can we help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project and what you're looking to accomplish" 
                          rows={4} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="sandbox"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange} 
                        />
                      </FormControl>
                      <FormLabel className="text-muted-foreground cursor-pointer">
                        Request sandbox access credentials
                      </FormLabel>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book a Demo"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Or email us directly at <a href="mailto:developers@bionimal.com" className="text-primary hover:text-primary/80">developers@bionimal.com</a>
            </p>
          </div>
        </div>
        
        {/* Other contact channels */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-foreground text-center mb-10">
            Other Ways to Connect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <h3 className="text-lg font-medium text-foreground">GitHub</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Star our repositories and contribute to our open source SDKs.
              </p>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block text-primary hover:text-primary/80"
              >
                github.com/bionimal
              </a>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <h3 className="text-lg font-medium text-foreground">Twitter</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Follow us for product updates, tips, and announcements.
              </p>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block text-primary hover:text-primary/80"
              >
                @bionimal
              </a>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <h3 className="text-lg font-medium text-foreground">Discord</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Join our developer community for live discussions and support.
              </p>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block text-primary hover:text-primary/80"
              >
                discord.gg/bionimal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
