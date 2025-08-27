
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Truck, Target } from "lucide-react";

const metrics = [
  {
    icon: Calendar,
    value: 15,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: MapPin,
    value: 48,
    suffix: "",
    label: "States Covered",
  },
  {
    icon: Truck,
    value: 200,
    suffix: "+",
    label: "Fleet Vehicles",
  },
  {
    icon: Target,
    value: 99.8,
    suffix: "%",
    label: "On-Time Delivery",
  }
];

function CountUpAnimation({ endValue, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isFloat = endValue % 1 !== 0;

  useEffect(() => {
    if (!hasAnimated) return;
    
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const rawValue = progress * endValue;

      if (progress === 1) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(rawValue.toFixed(1)) : Math.floor(rawValue));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [endValue, duration, hasAnimated, isFloat]);

  return (
    <motion.span
      onViewportEnter={() => setHasAnimated(true)}
      viewport={{ once: true, amount: 0.8 }}
    >
      {count}
    </motion.span>
  );
}

export default function MetricsSection() {
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
            <span className="text-white text-sm font-semibold uppercase tracking-wide">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white readex-heading mb-4">
            Trusted by Businesses Nationwide
          </h2>
          <p className="text-xl text-[#9AA3AE] readex-body max-w-2xl mx-auto">
            Numbers that showcase our commitment to excellence and reliable freight transportation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="glass-card rounded-2xl p-6 group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/20 rounded-xl flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-black text-white readex-heading mb-2 flex-grow">
                  <CountUpAnimation endValue={metric.value} />
                  <span className="text-white">{metric.suffix}</span>
                </div>

                {/* Label */}
                <div className="text-[#9AA3AE] font-medium uppercase tracking-wide text-sm h-10 flex items-end justify-center text-center">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
