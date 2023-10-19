"use client";

import React from "react";
import { Card, Rate } from "antd";

const ClientReviewSection = () => {
  return (
    <section className="client-review-section">
      <h2>Client Reviews</h2>
      <Card>
        <p>Client testimonial goes here.</p>
        <Rate disabled defaultValue={4} />
      </Card>
      <Card>
        <p>Another client testimonial goes here.</p>
        <Rate disabled defaultValue={5} />
      </Card>
      {/* Add more client reviews here */}
    </section>
  );
};

export default ClientReviewSection;
