import { Card } from "antd";

const Contacts = () => {
  return (
    <div>
      <Card
        title="Card title"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default Contacts;
