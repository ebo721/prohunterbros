import { Link } from "wouter";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Facebook, Twitter, Linkedin, Instagram, Github, Youtube } from "lucide-react";

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
    <footer id="contact-section" className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Subscribe */}
         
          {/* Column 2: Products */}

          {/* Column 3: Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 !text-white">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#" className="hover:text-primary transition-colors"
                    // Link ашиглахын оронд шууд MenuItem-ийн onClick дээр бичих нь хамгийн найдвартай
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('aboutus');
                      if (element) {
                        // scroll-mt нэмсэн бол smooth scroll шууд ажиллана
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}>About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors"
                    // Link ашиглахын оронд шууд MenuItem-ийн onClick дээр бичих нь хамгийн найдвартай
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('argali');
                      if (element) {
                        // scroll-mt нэмсэн бол smooth scroll шууд ажиллана
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}>Argali</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors"
                    // Link ашиглахын оронд шууд MenuItem-ийн onClick дээр бичих нь хамгийн найдвартай
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('Ibex');
                      if (element) {
                        // scroll-mt нэмсэн бол smooth scroll шууд ажиллана
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}>Ibex</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors"
                    // Link ашиглахын оронд шууд MenuItem-ийн onClick дээр бичих нь хамгийн найдвартай
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('other');
                      if (element) {
                        // scroll-mt нэмсэн бол smooth scroll шууд ажиллана
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}>Other challenge</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors"
                    // Link ашиглахын оронд шууд MenuItem-ийн onClick дээр бичих нь хамгийн найдвартай
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('gallery');
                      if (element) {
                        // scroll-mt нэмсэн бол smooth scroll шууд ажиллана
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}>Gallery</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 !text-white">Contacts</h3>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              <li>+976-96122771</li>
              <li>info@prohuntbros.mn</li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-white/50">
          <p>Copyright © 2026 EZ solution LLC</p>
        </div>
      </div>
    </footer>
  );
}
