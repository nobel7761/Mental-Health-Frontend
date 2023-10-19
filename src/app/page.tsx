import AvailableServiceSection from "@/components/shared/AvailableService";
import CarouselSection from "@/components/shared/Carousel";
import EventsByCategorySection from "@/components/shared/EventByCategory";
import LatestNewsSection from "@/components/shared/LatestNews";
import Navbar from "@/components/shared/Navbar";
import SurveyOverviewSection from "@/components/shared/OverviewSection";
import ClientReviewSection from "@/components/shared/Review";
import UpcomingServicesSection from "@/components/shared/UpcomingService";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CarouselSection />
      <AvailableServiceSection />
      <UpcomingServicesSection />
      <EventsByCategorySection />
      <SurveyOverviewSection />
      <ClientReviewSection />
      <LatestNewsSection />
    </div>
  );
};

export default Home;
