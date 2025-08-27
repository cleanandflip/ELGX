

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Mail, MessageCircle, Quote, Truck, User, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuickQuote, setShowQuickQuote] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0E1216] text-[#F5F7FA] relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700;800;900&display=swap');
        
        :root {
          --bg-base: #0E1216;
          --surface-1: #141A21;
          --surface-2: #1B222B;
          --border: #2D3642;
          --text-primary: #F5F7FA;
          --text-muted: #9AA3AE;
          --accent-orange: #F68B1F; /* Keeping this for other potential uses, though reducing prominence */
          --accent-hover: #D67414; /* Keeping this for other potential uses, though reducing prominence */
          --orange-glow: rgba(246,139,31,0.35); /* Keeping this for other potential uses, though reducing prominence */
        }
        
        * {
          font-family: 'Readex Pro', 'Satoshi', 'General Sans', sans-serif;
        }
        
        body {
          background: radial-gradient(ellipse at top left, #141A21 0%, #0E1216 50%, #0B0F13 100%);
          background-attachment: fixed;
        }
        
        .glass-card {
          background: rgba(23,28,34,0.72);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 18px 40px rgba(0,0,0,0.35);
        }
        
        .glass-card:hover {
          box-shadow: 0 0 0 1px #2D3642, 0 10px 30px rgba(246,139,31,0.12); /* This glow is from CSS, not inline */
        }
        
        .orange-glow {
          box-shadow: 0 0 25px rgba(246,139,31,0.35);
        }
        
        .readex-heading {
          font-family: 'Readex Pro', sans-serif;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.01em;
        }
        
        .readex-body {
          font-family: 'Readex Pro', sans-serif;
          font-weight: 400;
          line-height: 1.6;
        }
      `}</style>
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      {/* Floating Navigation */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? 'glass-card px-8 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]' 
          : 'bg-[rgba(23,28,34,0.5)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] px-8 py-6'
      }`}>
        <div className="flex items-center justify-between gap-12">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center hover:scale-105 transition-transform duration-200">
            <img 
              src="" // base44 logo removed
              alt="Elite Logistics Icon"
              className="h-14 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link 
              to={createPageUrl("Home")} 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === createPageUrl("Home") ? 'text-[#F68B1F]' : 'text-[#9AA3AE] hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link 
              to={createPageUrl("Drivers")} 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === createPageUrl("Drivers") ? 'text-[#F68B1F]' : 'text-[#9AA3AE] hover:text-white'
              }`}
            >
              Drive for Us
            </Link>
            <Link 
              to={createPageUrl("Contact")} 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === createPageUrl("Contact") ? 'text-[#F68B1F]' : 'text-[#9AA3AE] hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <a href="tel:1-800-ELGX-NOW" className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#9AA3AE] transition-colors">
              <Phone className="w-4 h-4" />
              1-800-ELGX-NOW
            </a>
            <a href="mailto:dispatch@elgx.com" className="text-[#9AA3AE] hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Quick Quote Dock */}
      <Link
        to={createPageUrl("Quote")}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 block"
        onMouseEnter={() => setShowQuickQuote(true)}
        onMouseLeave={() => setShowQuickQuote(false)}
      >
        <div
          className={`glass-card rounded-full p-4 flex items-center overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ${
            showQuickQuote ? 'w-56' : 'w-16'
          }`}
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <Quote className="w-4 h-4 text-[#0E1216]" />
          </div>
          <div
            className={`ml-4 whitespace-nowrap transition-opacity duration-200 ${
              showQuickQuote ? 'opacity-100 delay-150' : 'opacity-0'
            }`}
          >
            <div className="text-sm font-semibold text-white">Quick Quote</div>
            <div className="text-xs text-[#9AA3AE]">Get pricing in minutes</div>
          </div>
        </div>
      </Link>

      {/* Page Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#2D3642] bg-[rgba(23,28,34,0.72)] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src="" // base44 logo removed
                    alt="Elite Logistics Icon"
                    className="h-16 w-auto"
                  />
                  <div>
                    <div className="text-3xl font-black text-white readex-heading tracking-tight">
                      ELITE
                      <span className="text-white ml-1">LOGISTICS</span>
                    </div>
                    <div className="text-xs text-[#9AA3AE] font-semibold uppercase tracking-widest">
                      DRIVEN TO DELIVER
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[#9AA3AE] readex-body max-w-md">
                Premium carrier services across 48 states. Over 15 years of reliable freight transportation with our dedicated fleet and expert logistics team.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <div className="text-[#9AA3AE] hover:text-white transition-colors cursor-pointer">Full Truckload (FTL)</div>
                <div className="text-[#9AA3AE] hover:text-white transition-colors cursor-pointer">Less Than Truckload (LTL)</div>
                <div className="text-[#9AA3AE] hover:text-white transition-colors cursor-pointer">Dedicated Fleet</div>
                <div className="text-[#9AA3AE] hover:text-white transition-colors cursor-pointer">Warehousing & Distribution</div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="tel:1-800-ELGX-NOW" className="flex items-center gap-2 text-white hover:text-[#9AA3AE] transition-colors">
                  <Phone className="w-4 h-4" />
                  1-800-ELGX-NOW
                </a>
                <a href="mailto:dispatch@elgx.com" className="flex items-center gap-2 text-[#9AA3AE] hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  dispatch@elgx.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#2D3642] mt-12 pt-8 text-center text-sm text-[#9AA3AE]">
            <p>© 2025 Elite Logistics (ELGX), DOT Certified Carrier. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

