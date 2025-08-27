
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Truck, Package, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Full Truckload (FTL)",
    description: "Dedicated capacity for your large shipments with direct delivery and maximum security",
    features: [
      "Direct delivery routes",
      "Enhanced security",
      "Flexible scheduling",
      "Real-time tracking"
    ]
  },
  {
    icon: Package,
    title: "Less Than Truckload (LTL)",
    description: "Cost-effective solution for smaller shipments that don't require a full truck",
    features: [
      "Shared capacity savings",
      "Terminal-to-terminal service",
      "Regional coverage",
      "Consolidated shipping"
    ]
  },
  {
    icon: Users,
    title: "Dedicated Fleet",
    description: "Exclusive carrier services with assigned drivers and equipment for your business",
    features: [
      "Assigned drivers",
      "Exclusive equipment",
      "Custom solutions",
      "Priority service"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white bg-opacity-10 rounded-full mb-6">
            <span className="text-white text-sm font-semibold uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white readex-heading mb-4">
            Premium Carrier Solutions
          </h2>
          <p className="text-xl text-[#9AA3AE] readex-body max-w-2xl mx-auto">
            Comprehensive freight transportation services designed to meet your unique business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 group hover:transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* White Top Rule */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white to-white opacity-30 group-hover:h-2 group-hover:opacity-50 transition-all duration-300"></div>

              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/20 rounded-xl flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 readex-heading">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#9AA3AE] readex-body mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-sm text-[#9AA3AE]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10 w-full justify-between group-hover:border-white/20 transition-all duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3">
            <Clock className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Warehousing & Distribution</span>
            <span className="text-[#9AA3AE]">•</span>
            <span className="text-white">Storage and fulfillment services available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
