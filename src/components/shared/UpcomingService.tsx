"use client";

import React from "react";
import { Card } from "antd";

const UpcomingServicesSection = () => {
  return (
    <section className="upcoming-services-section">
      <h2>Upcoming Services</h2>
      <Card title="Upcoming Event 1" style={{ width: 300 }}>
        Event details for Event 1.
      </Card>
      <Card title="Upcoming Event 2" style={{ width: 300 }}>
        Event details for Event 2.
      </Card>
      {/* Add more upcoming event cards here */}
    </section>
  );
};

export default UpcomingServicesSection;
