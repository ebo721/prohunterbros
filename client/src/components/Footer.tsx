import { Link } from "wouter";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
  const mutation = useSubmitContact();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      email: "",
      message: "Newsletter Subscription",
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Subscribe */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Stay in the loop</h3>
            <p className="text-white/70 text-sm mb-4">
              Get the latest insights and news delivered to your inbox.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          {...field} 
                          className="bg-white text-secondary border-none"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300 text-xs" />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  {mutation.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Popular Features</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#" className="hover:text-primary transition-colors">Free CRM</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Marketing Automation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Sales Pipeline</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Help Desk</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Website Builder</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Management Team</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Board of Directors</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Investor Relations</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              <li>1-888-HUBSPOT</li>
              <li>Support: support@hubstyle.com</li>
              <li>Sales: sales@hubstyle.com</li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white">Legal Stuff</Link>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Security</Link>
          </div>
          <p>Copyright © 2024 HubStyle, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
