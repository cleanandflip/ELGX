
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [truckPosition, setTruckPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTruckPosition(prev => (prev >= 100 ? 0 : prev + 0.5));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F68B1F] opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F68B1F] opacity-[0.02] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl text-white mb-4 flex items-center justify-center leading-none" style={{ textShadow: '0 2px 20px rgba(255,255,255,0.1)' }}>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8a6f08ac1_EliteLogisticsLogoSymbol.png" 
                alt="Elite E Logo"
                className="h-[0.85em] w-auto mr-1 filter brightness-0 invert"
                style={{
                  filter: 'brightness(0) invert(1) drop-shadow(0 2px 20px rgba(255,255,255,0.15))',
                  transform: 'translateY(-0.04em)'
                }}
              />
              <span className="readex-heading font-light tracking-tight">lite</span>
              <span className="mx-3"></span>
              <span className="readex-heading font-bold tracking-tight">Logistics</span>
            </h1>
          </motion.div>

          {/* Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-6">
              <div className="h-px bg-gradient-to-r from-transparent to-[#9AA3AE] w-20"></div>
              <div className="text-sm text-[#9AA3AE] uppercase tracking-[0.2em] font-medium">
                DRIVEN TO DELIVER
              </div>
              <div className="h-px bg-gradient-to-l from-transparent to-[#9AA3AE] w-20"></div>
            </div>
          </motion.div>

          {/* Route Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <svg width="100%" height="120" viewBox="0 0 600 120" className="mb-4">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9AA3AE" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#9AA3AE" stopOpacity="1" />
                    <stop offset="100%" stopColor="#9AA3AE" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Route Line */}
                <motion.path
                  d="M 50 60 Q 200 20 400 60 Q 500 80 550 60"
                  stroke="url(#routeGradient)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                  style={{ filter: 'drop-shadow(0 0 4px rgba(154,163,174,0.4))' }}
                />
                
                {/* Animated Truck */}
                <motion.g
                  animate={{ x: truckPosition * 5 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                >
                  <circle cx="50" cy="60" r="8" fill="#9AA3AE" opacity="0.8" />
                  <Truck className="w-4 h-4 text-white" x="46" y="56" />
                </motion.g>
                
                {/* Start/End Points */}
                <circle cx="50" cy="60" r="4" fill="#9AA3AE" />
                <circle cx="550" cy="60" r="4" fill="#9AA3AE" />
              </svg>
              
              <div className="flex justify-between text-sm text-[#9AA3AE]">
                <span>Origin</span>
                <span>Destination</span>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Link to={createPageUrl("Quote")}>
              <Button className="bg-[#F68B1F] hover:bg-[#D67414] text-white font-semibold px-8 py-4 text-lg rounded-full orange-glow transition-all duration-200 hover:scale-105">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Link to={createPageUrl("Drivers")}>
              <Button variant="outline" className="border-[#F68B1F] text-[#F68B1F] hover:bg-[#F68B1F]/20 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-200">
                Apply to Drive
              </Button>
            </Link>
          </motion.div>

          {/* Service Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['FTL', 'LTL', 'Dedicated', 'Warehousing & Distribution'].map((service, index) => (
              <div
                key={service}
                className="glass-card px-4 py-2 rounded-full text-sm font-medium text-[#9AA3AE] uppercase tracking-wide"
              >
                {service}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
