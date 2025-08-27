
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function ReadyToShipBand() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F68B1F] to-[#D67414] opacity-[0.08]"></div>
        <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-[#F68B1F] to-transparent opacity-[0.05] transform skew-x-12"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-white bg-opacity-10 rounded-full mb-6">
                <span className="text-white text-sm font-semibold uppercase tracking-wide">Ready to Ship?</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-white readex-heading mb-4">
                Get your freight moving with ELGX's reliable carrier services
              </h2>
              
              <p className="text-xl text-[#9AA3AE] readex-body mb-8 leading-relaxed">
                Our experienced logistics team is standing by to provide you with competitive rates and guaranteed capacity for your next shipment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl("Quote")}>
                  <Button className="bg-[#F68B1F] hover:bg-[#D67414] text-white font-semibold px-8 py-4 text-lg rounded-full orange-glow transition-all duration-200 hover:scale-105">
                    Get Quote Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <a href="tel:1-800-ELGX-NOW">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-200">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 1-800-ELGX-NOW
                  </Button>
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 rounded-full opacity-20 blur-xl"
              ></motion.div>
              
              <div className="relative glass-card rounded-2xl p-8 text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-white/20 to-white/30 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">24/7 Dispatch</h3>
                <p className="text-[#9AA3AE] text-sm">Always ready to move your freight</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
