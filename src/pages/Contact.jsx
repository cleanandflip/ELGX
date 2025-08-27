
import React, { useState } from "react";
import { Contact as ContactEntity } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageCircle, CheckCircle, Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "1-800-ELGX-NOW",
    description: "24/7 dispatch and customer service"
  },
  {
    icon: Mail,
    title: "Email",
    details: "dispatch@elgx.com",
    description: "For quotes and general inquiries"
  },
  {
    icon: MapPin,
    title: "Coverage",
    details: "48 States",
    description: "Nationwide freight transportation"
  },
  {
    icon: Clock,
    title: "Response Time",
    details: "< 2 Hours",
    description: "During business hours"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await ContactEntity.create(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full"
        >
          <Card className="glass-card rounded-2xl border-[#2D3642] text-center">
            <CardContent className="p-8">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#F68B1F] to-[#D67414] rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4 readex-heading">
                Message Sent!
              </h2>
              
              <p className="text-[#9AA3AE] readex-body mb-6">
                Thank you for contacting ELGX. Our team will get back to you within 2 hours during business hours.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-[#F68B1F]">
                  <MessageCircle className="w-4 h-4" />
                  Ticket ID: #{Date.now().toString().slice(-6)}
                </div>
              </div>
              
              <Link to={createPageUrl("Home")}>
                <Button className="w-full bg-[#F68B1F] hover:bg-[#D67414] text-white font-semibold">
                  Return Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 pt-32 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <Link to={createPageUrl("Home")}>
            <Button variant="outline" size="icon" className="border-[#2D3642] text-[#9AA3AE] hover:border-[#F68B1F] hover:text-[#F68B1F]">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white readex-heading">Contact Us</h1>
            <p className="text-[#9AA3AE] readex-body">Get in touch with our logistics experts</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-white bg-opacity-10 rounded-full mb-6">
                <span className="text-white text-sm font-semibold uppercase tracking-wide">Get In Touch</span>
              </div>
              <h2 className="text-3xl font-black text-white readex-heading mb-4">
                Ready to Move Your Freight?
              </h2>
              <p className="text-xl text-[#9AA3AE] readex-body leading-relaxed">
                Our experienced logistics team is standing by to help with your transportation needs. Contact us today for competitive rates and reliable service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 readex-heading">
                        {info.title}
                      </h3>
                      <div className="text-white font-semibold mb-1">
                        {info.details}
                      </div>
                      <p className="text-sm text-[#9AA3AE] readex-body">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4 readex-heading">Quick Actions</h3>
              <div className="space-y-3">
                <Link to={createPageUrl("Quote")}>
                  <Button className="w-full justify-start bg-[#F68B1F] hover:bg-[#D67414] text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Request a Quote
                  </Button>
                </Link>
                <a href="tel:1-800-ELGX-NOW" className="block">
                  <Button variant="outline" className="w-full justify-start border-white text-white hover:bg-white/10">
                    <Phone className="w-4 h-4 mr-2" />
                    Call for Urgent Shipments
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-card rounded-2xl border-[#2D3642]">
              <CardHeader className="border-b border-[#2D3642]">
                <CardTitle className="text-xl font-bold text-white readex-heading flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-[#F68B1F]" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-medium">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white font-medium">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F] min-h-[160px]"
                      placeholder="How can we help you with your freight needs?"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#F68B1F] hover:bg-[#D67414] text-white font-semibold py-4 text-lg orange-glow transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
