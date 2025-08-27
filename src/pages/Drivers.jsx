
import React, { useState } from "react";
import { Driver } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, User, CheckCircle, Send, DollarSign, Shield, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Top rates in the industry with weekly settlements"
  },
  {
    icon: Shield,
    title: "Comprehensive Benefits",
    description: "Health, dental, vision, and retirement plans"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible schedules and home time guaranteed"
  },
  {
    icon: Award,
    title: "Safety Bonus",
    description: "Rewards for safe driving and clean records"
  }
];

export default function DriversPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cdl_number: '',
    exp_years: '',
    equipment: '',
    preferred_lanes: ''
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
      await Driver.create({
        ...formData,
        exp_years: formData.exp_years ? parseInt(formData.exp_years) : undefined
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting driver application:', error);
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
                Application Submitted!
              </h2>
              
              <p className="text-[#9AA3AE] readex-body mb-6">
                Thank you for your interest in driving for ELGX. Our recruitment team will review your application and contact you within 24 hours.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-[#F68B1F]">
                  <User className="w-4 h-4" />
                  Application ID: #{Date.now().toString().slice(-6)}
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
            <h1 className="text-3xl md:text-4xl font-black text-white readex-heading">Drive for ELGX</h1>
            <p className="text-[#9AA3AE] readex-body">Join our elite team of professional drivers</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-white bg-opacity-10 rounded-full mb-6">
                <span className="text-white text-sm font-semibold uppercase tracking-wide">Why Choose ELGX</span>
              </div>
              <h2 className="text-3xl font-black text-white readex-heading mb-4">
                Drive with Excellence
              </h2>
              <p className="text-xl text-[#9AA3AE] readex-body leading-relaxed">
                At ELGX, we value our drivers as the backbone of our success. Join a company that invests in your career and provides the support you need to thrive.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 readex-heading">
                        {benefit.title}
                      </h3>
                      <p className="text-[#9AA3AE] readex-body">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-card rounded-2xl border-[#2D3642]">
              <CardHeader className="border-b border-[#2D3642]">
                <CardTitle className="text-xl font-bold text-white readex-heading flex items-center gap-2">
                  <User className="w-6 h-6 text-[#F68B1F]" />
                  Driver Application
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                      placeholder="Your full name"
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
                      <Label htmlFor="phone" className="text-white font-medium">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cdl_number" className="text-white font-medium">CDL Number *</Label>
                      <Input
                        id="cdl_number"
                        value={formData.cdl_number}
                        onChange={(e) => handleInputChange('cdl_number', e.target.value)}
                        className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                        placeholder="CDL license number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="exp_years" className="text-white font-medium">Years Experience *</Label>
                      <Input
                        id="exp_years"
                        type="number"
                        min="0"
                        value={formData.exp_years}
                        onChange={(e) => handleInputChange('exp_years', e.target.value)}
                        className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                        placeholder="5"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="equipment" className="text-white font-medium">Preferred Equipment *</Label>
                    <Select value={formData.equipment} onValueChange={(value) => handleInputChange('equipment', value)}>
                      <SelectTrigger className="bg-[#1B222B] border-[#2D3642] text-white focus:border-[#F68B1F]">
                        <SelectValue placeholder="Select equipment type" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1B222B] border-[#2D3642]">
                        <SelectItem value="dry_van">Dry Van</SelectItem>
                        <SelectItem value="flatbed">Flatbed</SelectItem>
                        <SelectItem value="reefer">Refrigerated</SelectItem>
                        <SelectItem value="tanker">Tanker</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred_lanes" className="text-white font-medium">Preferred Lanes/Routes</Label>
                    <Textarea
                      id="preferred_lanes"
                      value={formData.preferred_lanes}
                      onChange={(e) => handleInputChange('preferred_lanes', e.target.value)}
                      className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F] min-h-[120px]"
                      placeholder="e.g., Southeast regional, West Coast, OTR, Local delivery..."
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
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Submit Application
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
