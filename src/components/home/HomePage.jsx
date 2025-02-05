import { Layout } from "antd";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom"; // ✅ Import Outlet

const { Content } = Layout;

const HomePage = ({ children }) => {
  return (
    <Layout>
      <Content>
        {children}
        <Outlet /> {/* This renders nested routes */}
      </Content>
    </Layout>
  );
};

HomePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePage;
