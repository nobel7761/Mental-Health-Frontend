"use client";

import React from "react";
import { Card } from "antd";

const LatestNewsSection = () => {
  return (
    <section className="latest-news-section">
      <h2>Latest News</h2>
      <Card title="News Article 1">News article content goes here.</Card>
      <Card title="News Article 2">News article content goes here.</Card>
      {/* Add more news articles here */}
    </section>
  );
};

export default LatestNewsSection;
