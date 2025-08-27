
import React, { useState } from "react";
import { Quote as QuoteEntity } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Truck, CheckCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    company: '',
    contact_name: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    equipment: '',
    weight: '',
    dims: '',
    ready_date: '',
    notes: ''
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
      await QuoteEntity.create({
        ...formData,
        weight: formData.weight ? parseFloat(formData.weight) : undefined
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting quote request:', error);
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
                Quote Request Received!
              </h2>
              
              <p className="text-[#9AA3AE] readex-body mb-6">
                Our logistics team will review your request and provide you with a competitive quote within 2 hours during business hours.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-[#F68B1F]">
                  <Truck className="w-4 h-4" />
                  Reference ID: #{Date.now().toString().slice(-6)}
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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <Link to={createPageUrl("Home")}>
            <Button variant="outline" size="icon" className="border-[#2D3642] text-[#9AA3AE] hover:border-[#F68B1F] hover:text-[#F68B1F]">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white readex-heading">Get a Quote</h1>
            <p className="text-[#9AA3AE] readex-body">Get competitive pricing for your freight in minutes</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-card rounded-2xl border-[#2D3642]">
                <CardHeader className="border-b border-[#2D3642]">
                  <CardTitle className="text-xl font-bold text-white readex-heading flex items-center gap-2">
                    <Truck className="w-6 h-6 text-[#F68B1F]" />
                    Freight Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company & Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white font-medium">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                          placeholder="Your company name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact_name" className="text-white font-medium">Contact Name *</Label>
                        <Input
                          id="contact_name"
                          value={formData.contact_name}
                          onChange={(e) => handleInputChange('contact_name', e.target.value)}
                          className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                          placeholder="Your name"
                          required
                        />
                      </div>
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

                    {/* Shipping Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="origin" className="text-white font-medium">Origin (Pickup) *</Label>
                        <Input
                          id="origin"
                          value={formData.origin}
                          onChange={(e) => handleInputChange('origin', e.target.value)}
                          className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                          placeholder="City, State or ZIP"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="destination" className="text-white font-medium">Destination (Delivery) *</Label>
                        <Input
                          id="destination"
                          value={formData.destination}
                          onChange={(e) => handleInputChange('destination', e.target.value)}
                          className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                          placeholder="City, State or ZIP"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="equipment" className="text-white font-medium">Equipment Type *</Label>
                        <Select value={formData.equipment} onValueChange={(value) => handleInputChange('equipment', value)}>
                          <SelectTrigger className="bg-[#1B222B] border-[#2D3642] text-white focus:border-[#F68B1F]">
                            <SelectValue placeholder="Select equipment" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1B222B] border-[#2D3642]">
                            <SelectItem value="dry_van">Dry Van</SelectItem>
                            <SelectItem value="flatbed">Flatbed</SelectItem>
                            <SelectItem value="reefer">Refrigerated</SelectItem>
                            <SelectItem value="tanker">Tanker</SelectItem>
                            <SelectItem value="ltl">LTL</SelectItem>
                            <SelectItem value="ftl">FTL</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight" className="text-white font-medium">Weight (lbs)</Label>
                        <Input
                          id="weight"
                          type="number"
                          value={formData.weight}
                          onChange={(e) => handleInputChange('weight', e.target.value)}
                          className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                          placeholder="10000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dims" className="text-white font-medium">Dimensions</Label>
                        <Input
                          id="dims"
                          value={formData.dims}
                          onChange={(e) => handleInputChange('dims', e.target.value)}
                          className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F]"
                          placeholder="L x W x H"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ready_date" className="text-white font-medium">Ready Date *</Label>
                      <Input
                        id="ready_date"
                        type="date"
                        value={formData.ready_date}
                        onChange={(e) => handleInputChange('ready_date', e.target.value)}
                        className="bg-[#1B222B] border-[#2D3642] text-white focus:border-[#F68B1F]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-white font-medium">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                        className="bg-[#1B222B] border-[#2D3642] text-white placeholder-[#9AA3AE] focus:border-[#F68B1F] min-h-[120px]"
                        placeholder="Special requirements, delivery instructions, etc."
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
                          Request Quote
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quote Info Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 sticky top-32"
            >
              <Card className="glass-card rounded-2xl border-[#2D3642]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 readex-heading">Quote Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#F68B1F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <div className="font-medium text-white">Submit Request</div>
                        <div className="text-sm text-[#9AA3AE]">Fill out freight details</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#F68B1F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <div className="font-medium text-white">Review & Price</div>
                        <div className="text-sm text-[#9AA3AE]">Our team analyzes your needs</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#F68B1F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <div className="font-medium text-white">Receive Quote</div>
                        <div className="text-sm text-[#9AA3AE]">Get competitive pricing in 2 hours</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card rounded-2xl border-[#2D3642]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4 readex-heading">Need Help?</h3>
                  <div className="space-y-3">
                    <a href="tel:1-800-ELGX-NOW" className="flex items-center gap-3 p-3 rounded-lg bg-[#F68B1F] bg-opacity-10 hover:bg-opacity-20 transition-colors">
                      <div className="w-10 h-10 bg-[#F68B1F]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#F68B1F]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-white">Call Now</div>
                        <div className="text-sm text-[#F68B1F]">1-800-ELGX-NOW</div>
                      </div>
                    </a>
                    <div className="text-center">
                      <div className="text-sm text-[#9AA3AE]">Available 24/7 for urgent shipments</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
