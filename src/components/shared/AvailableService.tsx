"use client";

import React from "react";
import { Card } from "antd";

const AvailableServiceSection = () => {
  return (
    <section className="available-service-section">
      <h2>Available Services</h2>
      <Card title="Service 1" style={{ width: 300 }}>
        Service details for Service 1.
      </Card>
      <Card title="Service 2" style={{ width: 300 }}>
        Service details for Service 2.
      </Card>
      {/* Add more service cards here */}
    </section>
  );
};

export default AvailableServiceSection;
