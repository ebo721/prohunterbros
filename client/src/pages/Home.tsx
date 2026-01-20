"use client";
import React, { useState } from "react";
import { Navigation as SiteNavigation } from "@/components/Navigation"; // Нэрийг нь өөрчлөв
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { useHighContrast } from "@/hooks/use-theme";
import { BarChart3, Users, MessageCircle, X, PieChart, Globe2, Zap, ArrowRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
// Swiper импорт - Нэрийг SwiperNav гэж өөрчилсөн
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
// Swiper CSS заавал байх ёстой
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: "gallery10.jpeg"
  },
  {
    image: "gallery.jpeg"
  },
  {
    image: "gallery1.jpeg"
  },
  {
    image: "gallery2.jpeg"
  },
  {
    image: "gallery3.jpeg"
  },
 {
    image: "gallery4.jpeg"
  },
  {
    image: "gallery5.jpeg"
  },
  {
    image: "gallery6.jpeg"
  },
  {
    image: "gallery7.jpeg"
   
  },
  {
    image: "gallery8.jpeg"
   
  },
  {
    image: "gallery9.jpeg"
   
  },

];

export default function Home() {
  const { isHighContrast, toggle } = useHighContrast();
  // 1. State-үүд энд байх ёстой
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // 2. Функц энд байх ёстой (Return-ийн дээр)
  const openLightbox = (index: number) => {
    console.log("Зураг нээгдлээ:", index); // Шалгах зорилгоор
    setPhotoIndex(index);
    setIsOpen(true);
    };
  return (
    
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SiteNavigation highContrast={isHighContrast} toggleHighContrast={toggle}/>
      <main className="flex-grow pt-28">
        {/* --- 1. HERO SECTION --- */}
        <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="banner.jpeg" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
          </div>

          <div className="relative z-20 px-1 md:px-8 max-w-7xl mx-auto w-full text-center">
            <div className="space-y-6">

              {/* 1. SPLIT TEXT ANIMATION (Гарчиг хэсэг) */}
              <div className="split-text-container">
                <span className="text-part left">We believe in</span>
                <span className="text-part right">Nature</span>
              </div>
              {/* 2. БУСАД ТЕКСТ БОЛОН ТОВЧЛУУР (Тусдаа motion.div) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }} // Анимаци дууссаны дараа гарч ирнэ
                className="space-y-6"
              >
                <p className="text-sm md:text-xl text-white max-w-[90%] md:max-w-lg mx-auto px-4">
                  Where Challenge Meets Professional Hunting.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* 1. About us */}
        <section id="aboutus" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* 1. Зургийн хэсэг */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  {/* Зургийн ард талын гоёл (Сонголттой) */}
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10"></div>
                  <img 
                    src="aboutus.jpeg" 
                    alt="About Us" 
                    className="w-full h-[400px] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              {/* 2. Текстийн хэсэг */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                  Quality<br /> 
                  <span className="text-secondary text-4xl"> over </span>quantity
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  We are a local company that organizes all-inclusive hunting trips in Mongolia for international clients.  Our crew is well skilled and professional staffs who have more than 10 years experiences in the hunting services across the country.
                  In business, we don’t pursue number but the Quality is mandatory.
                  For us, how’s our customer satisfaction is more important than how many hunters and hunts we have.
                  We provide a cordial service on every part of the trip in order to satisfy clients with successful hunt and beautiful trophy.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* --- 2.1 Argali SECTION --- */}
        <section id="challenge" className="bg-primary/10 pt-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-12">
              The Argali (Ovis ammon)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                  imageSrc="altaiargali.jpeg"
                  title="Altai Argali"
                  description="Altai Argali hunt is located in Bayan-Ulgii, Khovd and Uvs provinces, approx. 10 days, average horn size 50” length and 18” base, shooting range at 300-500 yards with all-inclusive package."
                  onClick={() => openLightbox(0)} // Index-ийн оронд 0
              />
              <FeatureCard 
                icon={<Users className="w-6 h-6" />}
                title="Khangai Argali"
                imageSrc="khangaiargali.jpeg"
                description="Khangai Argali hunt is located in mountains of Khangai region, approx. 8-10 days, average horn size 46” length and 15” base, shooting range at 300-500 yards with all-inclusive package."
                linkHref="#"
              />
              <FeatureCard 
                imageSrc="gobiargali.jpeg"
                title="Gobi Argali"
                description="Gobi Argali hunt is located in Gobi desert south area of the country, approx. 8-10 days, average horn size 42” length and 15” base, shooting range at 200-400 yards with all-inclusive camping."
                linkHref="#"
              />
            </div>
          </div>
        </section>
        {/* --- 2.2 Ibex SECTION --- */}
        <section id="Ibex" className="bg-primary/10 pt-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-12">
              The Ibex (Capra sibirica)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<BarChart3 className="w-6 h-6" />}
                  title="Altai Ibex"
                  description="Marketing software to help you grow traffic and run complete inbound campaigns."
                  imageSrc="altaiibex.jpeg"
                  linkHref="#"
                  onClick={() => openLightbox(0)} // Index-ийн оронд 0
              />
              <FeatureCard 
                icon={<Users className="w-6 h-6" />}
                title="Gobi Ibex"
                description="CRM software to help you get deeper insights and close more deals faster."
                imageSrc="gobiibex.jpeg"
                linkHref="#"
              />
            </div>
          </div>
        </section>
        {/* --- 2.3 Other SECTION --- */}
        <section id="other" className="bg-primary/10 py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-12">
              Other
            </h2>
              <div className="flex flex-col gap-8 w-full">
              <FeatureCard 
                icon={<BarChart3 className="w-6 h-6" />}
                  title="More challenges"
                  description="Marketing software to help you grow traffic and run complete inbound campaigns."
                  imageSrc="other.jpeg"
                  onClick={() => openLightbox(0)} // Index-ийн оронд 0

              />


            </div>
          </div>
        </section>
        {/* --- 3. Gallery SECTION --- */}
        <section id="gallery" className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Gallery
          </h2>
          <Swiper
            // Swiper-ийн модулиудыг тохируулах
            modules={[Navigation, Pagination, Autoplay]}

            // Хамгийн чухал хэсэг: Хэдэн зураг харагдах
            slidesPerView={1} // Анхдагч утга (Гар утсан дээр)
            spaceBetween={20} // Зураг хоорондын зай (px)

            // Дэлгэцийн хэмжээнээс хамаарч өөрчлөгдөх (Responsive)
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}

            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full pb-12" // Pagination цэгүүд орох зай авах
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col space-y-4">
                  {/* 1:1 Харьцаатай зураг */}
                  <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg group">
                    <img 
                      src={slide.image}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Зураг дээрх Overlay (Hover хийхэд харагдана) */}
                    <div 
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                      onClick={() => openLightbox(index)} // Энд index-ийг дамжуулна
                    >
                      <p className="text-white font-medium border border-white px-4 py-2 rounded-full pointer-events-none">
                        See more
                      </p>
                    </div>
                  </div>

                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        
      </main>
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          asChild 
          size="lg" 
          className="rounded-full w-14 h-14 md:w-auto md:h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group p-0 md:px-6"
        >
          <a 
            href="https://wa.me/97696122771?text=Hello? What is your challenge?" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            {/* WhatsApp SVG Icon */}
            <svg 
              className="w-7 h-7 md:w-5 md:h-5 fill-current" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {/* Зөвхөн компьютер дээр текст харагдах, утсан дээр зөвхөн дугуй икон харагдана */}
            <span className="hidden md:inline ml-2">Inquiry</span>
          </a>
        </Button>
      </div>
      <Footer />
      <AnimatePresence>
        {isOpen && ( // <--- Энд isOpen-ийн утгыг "уншиж" (ашиглаж) байна
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4"
          >
            {/* Хаах товчлуур */}
            <button 
              onClick={() => setIsOpen(false)} // Буцаагаад хаана
              className="absolute top-6 right-6 z-[10000] text-white"
            >
              <X size={40} />
            </button>

            {/* Зургийг Swiper-ээр харуулах хэсэг */}
            <div className="w-full h-full max-w-5xl flex items-center justify-center">
              <Swiper 
                modules={[Navigation, Pagination, Keyboard]} 
                initialSlide={photoIndex} 
                navigation 
                className="w-full h-full"
              >
                {slides.map((slide, idx) => (
                  <SwiperSlide key={idx} className="flex flex-col items-center justify-center text-white">
                    <img src={slide.image} className="max-h-[70vh] object-contain rounded-lg shadow-2xl"/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* CSS засвар */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-button-next, .swiper-button-prev { color: white !important; }
        .swiper-pagination-bullet { background: gray !important; }
        .swiper-pagination-bullet-active { background: #df7a27 !important; }
        .split-text-container {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 3rem; /* Мобайл хэмжээ */
          font-weight: 800;
          overflow: hidden;
          color: white !important;
          line-height: 1.1;
        }

        /* Том дэлгэцэнд зориулсан хэмжээ */
        @media (min-width: 768px) {
          .split-text-container { font-size: 5rem; }
        }

        .text-part {
          display: inline-block;
          position: relative;
          animation-duration: 1.2s;
          animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
          animation-fill-mode: forwards;
        }

        .text-part.left {
          transform: translateX(-100%);
          animation-name: slide-in-left;
          padding-right: 5px;
        }

        .text-part.right {
          transform: translateX(100%);
          animation-name: slide-in-right;
          padding-left: 5px;
          color: #df7a27; /* Баруун талын үгийг онцлох өнгө (заавал биш) */
        }

        @keyframes slide-in-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}} />
    </div>
  );
}