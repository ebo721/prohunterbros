import { useState } from 'react';
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { X, ArrowRight, Maximize2 } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from 'framer-motion';

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  linkHref?: string;
  linkText?: string;
  imageSrc?: string;
  onClick?: () => void;
}

export function FeatureCard({ imageSrc, title, description, linkText = "Learn more" }: FeatureCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Үндсэн Карт */}
      <div 
        className="bg-card rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          {/* Zoom icon - Хулгана очиход гарч ирнэ */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Maximize2 className="text-white w-8 h-8" />
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-normal text-secondary mb-2">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm mb-4">{description}</p>
          <div className="flex items-center text-primary font-bold text-sm">
            {linkText} <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Popup / Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Overlay - Ар талын бүдгэрүүлэгч */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Хаах товчлуур */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Том зураг */}
              <div className="w-full md:w-3/5 h-[300px] md:h-[500px]">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
              </div>

              {/* Текст мэдээлэл */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                <h2 className="text-2xl font-normal font-black text-slate-900 mb-4">{title}</h2>
                <div className="w-60 h-[2px] bg-primary mb-6 rounded-full mx-auto" />
                <p className="text-slate-600 text-lg font-light leading-relaxed overflow-y-auto max-h-[300px]">
                  {description}
                </p>
                {/* <button 
                  onClick={() => setIsOpen(false)}
                  className="mt-8 py-3 px-6 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all w-fit"
                >
                  Close Preview
                </button> */}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}