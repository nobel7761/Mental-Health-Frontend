import Link from "next/link";
import { Result, Button } from "antd";

const NotFoundPage = () => {
  return (
    <Result
      style={{
        minHeight: "100vh",
      }}
      status="404"
      title="404"
      subTitle="Sorry, the page you are looking for does not exist."
      extra={
        <Link href="/">
          <Button type="primary">Back to Home</Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
