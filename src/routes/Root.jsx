import { Layout } from "antd";
import { Outlet } from "react-router";
import SiteNav from "../components/common/SiteNav";
import { Footer, Header } from "antd/es/layout/layout";
import SiteFooter from "../components/common/SiteFooter";

const { Content } = Layout;

const Root = () => {
  return (
    <div>
      <Layout>
        <Header>
          <SiteNav />
        </Header>
      </Layout>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Layout>
        <Footer>
          <SiteFooter />
        </Footer>
      </Layout>
    </div>
  );
};

export default Root;
