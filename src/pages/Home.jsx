import React from "react";
import HeroSection from "../components/home/HeroSection";
import TimelineSection from "../components/home/TimelineSection";
import MetricsSection from "../components/home/MetricsSection";
import ServicesSection from "../components/home/ServicesSection";
import ReadyToShipBand from "../components/home/ReadyToShipBand";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TimelineSection />
      <MetricsSection />
      <ServicesSection />
      <ReadyToShipBand />
    </div>
  );
}