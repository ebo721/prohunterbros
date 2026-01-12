import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { useHighContrast } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { BarChart3, Users, MessageCircle, PieChart, Globe2, Zap } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Home() {
  const { isHighContrast, toggle } = useHighContrast();

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navigation highContrast={isHighContrast} toggleHighContrast={toggle} />

      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm">CRM Platform</h4>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary leading-[1.1]">
                Grow better with HubStyle
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Software that's powerful, not overpowering. Seamlessly connect your data, teams, and customers on one customer platform that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg rounded-md shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                  Get a demo
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/5 font-bold px-8 py-6 text-lg rounded-md border-2">
                  Get started free
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pt-2">
                Get access to all of our free tools. No credit card required.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl opacity-50 z-0" />
              {/* Illustration Placeholder - Using SVG composition */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-border/50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
                
                {/* Mock UI Dashboard */}
                <div className="space-y-6 mt-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <div className="h-4 w-32 bg-gray-200 rounded-full animate-pulse" />
                    <div className="flex space-x-2">
                      <div className="h-8 w-8 bg-gray-100 rounded-full" />
                      <div className="h-8 w-8 bg-primary/20 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="h-3 w-12 bg-gray-200 rounded-full" />
                      <div className="h-6 w-16 bg-secondary/80 rounded-md" />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="h-3 w-12 bg-gray-200 rounded-full" />
                      <div className="h-6 w-16 bg-primary/80 rounded-md" />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="h-3 w-12 bg-gray-200 rounded-full" />
                      <div className="h-6 w-16 bg-accent/80 rounded-md" />
                    </div>
                  </div>
                  
                  <div className="h-48 bg-gray-50 rounded-lg flex items-end justify-between p-4 gap-2">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="w-full bg-secondary/10 rounded-t-sm relative group"
                      >
                         <div className={`absolute bottom-0 left-0 w-full rounded-t-sm transition-all duration-300 ${i === 5 ? 'bg-primary' : 'bg-secondary'}`} style={{ height: '100%' }} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-secondary text-white p-4 rounded-lg shadow-xl border-l-4 border-primary max-w-[200px]"
              >
                <div className="text-xs uppercase font-bold text-white/60 mb-1">Total Revenue</div>
                <div className="text-2xl font-bold flex items-center">
                  $124,500 <span className="text-green-400 text-sm ml-2">▲ 12%</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                The customer platform built for growth
              </h2>
              <p className="text-lg text-muted-foreground">
                With HubStyle, you can bring your teams, tools, and data together in one place.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div variants={itemVariants}>
                <FeatureCard 
                  icon={<BarChart3 className="w-6 h-6" />}
                  title="Marketing Hub"
                  description="Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale."
                  linkHref="#"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FeatureCard 
                  icon={<Users className="w-6 h-6" />}
                  title="Sales Hub"
                  description="Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster."
                  linkHref="#"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FeatureCard 
                  icon={<MessageCircle className="w-6 h-6" />}
                  title="Service Hub"
                  description="Customer service software to help you connect with customers, exceed expectations, and turn them into promoters."
                  linkHref="#"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FeatureCard 
                  icon={<PieChart className="w-6 h-6" />}
                  title="CMS Hub"
                  description="Content management software that's flexible for marketers, powerful for developers, and gives your customers a personalized experience."
                  linkHref="#"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FeatureCard 
                  icon={<Globe2 className="w-6 h-6" />}
                  title="Operations Hub"
                  description="Operations software that syncs your apps, cleans your customer data, and automates every single process."
                  linkHref="#"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FeatureCard 
                  icon={<Zap className="w-6 h-6" />}
                  title="Commerce Hub"
                  description="B2B commerce software designed to help you streamline your opportunity-to-revenue process and get paid faster."
                  linkHref="#"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-secondary text-white py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right" />
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">205k+</div>
                <div className="text-white/70">Customers</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">135+</div>
                <div className="text-white/70">Countries</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">600+</div>
                <div className="text-white/70">Integrations</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/70">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Start growing with HubStyle today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the community of millions of professionals who are already growing better with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg rounded-md shadow-lg shadow-primary/20">
                Get started free
              </Button>
              <Button size="lg" variant="outline" className="bg-white border-secondary text-secondary hover:bg-secondary hover:text-white font-bold px-8 py-6 text-lg rounded-md border-2">
                Get a demo
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Get started with free tools, and upgrade as you grow.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
