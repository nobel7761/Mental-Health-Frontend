"use client";

import React from "react";
import { Card, Button } from "antd";

const SurveyOverviewSection = () => {
  return (
    <section className="survey-overview-section">
      <h2>Survey/Overview</h2>
      <Card title="Survey" style={{ width: 300 }}>
        Survey questions and options go here.
        <Button type="primary">Submit Survey</Button>
      </Card>
    </section>
  );
};

export default SurveyOverviewSection;
