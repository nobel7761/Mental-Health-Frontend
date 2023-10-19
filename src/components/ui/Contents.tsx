"use client";

import { Layout } from "antd";
import CustomizedBreadcrumb from "./CustomizedBreadcrumb";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <CustomizedBreadcrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `patient`,
            link: `/${base}/patient`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
