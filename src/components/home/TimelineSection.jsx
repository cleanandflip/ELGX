
import React from "react";
import { motion } from "framer-motion";
import { Quote, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Quote,
    title: "Quote",
    description: "Get instant pricing for your freight with our advanced logistics platform"
  },
  {
    icon: Users,
    title: "Capacity Assigned",
    description: "Our experienced team matches your load with the perfect driver and equipment"
  },
  {
    icon: CheckCircle,
    title: "Delivered",
    description: "Real-time tracking and updates ensure on-time delivery to your destination"
  }
];

export default function TimelineSection() {
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
            <span className="text-white text-sm font-semibold uppercase tracking-wide">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white readex-heading mb-4">
            How a Load Moves
          </h2>
          <p className="text-xl text-[#9AA3AE] readex-body max-w-2xl mx-auto">
            From quote to delivery, our streamlined process ensures your freight moves efficiently and safely
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
            <div className="flex items-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#9AA3AE] to-transparent opacity-50"></div>
            </div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="glass-card rounded-2xl p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
                {/* Icon with Glow */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-white/10 to-white/20 rounded-2xl flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0E1216] font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 readex-heading">
                  {step.title}
                </h3>
                
                <p className="text-[#9AA3AE] readex-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
