import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkHref: string;
  linkText?: string;
}

export function FeatureCard({ icon, title, description, linkHref, linkText = "Learn more" }: FeatureCardProps) {
  return (
    <div className="bg-card rounded-lg p-8 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      <div className="border-t border-border pt-6">
        <Link href={linkHref} className="inline-flex items-center font-bold text-primary hover:underline group-hover:translate-x-1 transition-transform">
          {linkText} <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
