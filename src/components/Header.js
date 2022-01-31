import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <Menu fixed="top" inverted style={{ marginBottom: "12vh" }}>
        <Menu.Item as="a" content="Home" onClick={() => navigate("/")} />
        <Menu.Item as="a" content="Users" onClick={() => navigate("/users")} />
        <Menu.Item as="a" content="Products" onClick={() => navigate("/products")} />
        <Menu.Item as="a" content="Product Categories" onClick={() => navigate("/category")} />

        <Menu.Menu position="right">
          <Menu.Item as="a" content="Profile" onClick={() => navigate("/profile")} />
          <Menu.Item as="a" content="Logout" onClick={handleLogout} />
        </Menu.Menu>
      </Menu>
      <Segment />
    </>
  );
};

export default Header;
