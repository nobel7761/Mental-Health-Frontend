"use client";

import React from "react";
import { Tabs, Card } from "antd";

const { TabPane } = Tabs;

const EventsByCategorySection = () => {
  return (
    <section className="events-by-category-section">
      <h2>Events by Category</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Category 1" key="1">
          <Card title="Event 1 in Category 1" style={{ width: 300 }}>
            Event details for Event 1.
          </Card>
          {/* Add more event cards in Category 1 */}
        </TabPane>
        <TabPane tab="Category 2" key="2">
          <Card title="Event 1 in Category 2" style={{ width: 300 }}>
            Event details for Event 1.
          </Card>
          {/* Add more event cards in Category 2 */}
        </TabPane>
      </Tabs>
    </section>
  );
};

export default EventsByCategorySection;
