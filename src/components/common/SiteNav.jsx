import { Link } from "react-router-dom";
import { Menu } from "antd";

const SiteNav = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/register">Register</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SiteNav;
