import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Container className="mb-5">
      <Menu fixed="top" inverted>
        <Menu.Item as="button" content="Home" onClick={() => navigate("/")} className="border-0" />
        <Menu.Item
          as="button"
          content="Users"
          onClick={() => navigate("/users")}
          className="border-0"
        />
        <Menu.Item
          as="button"
          content="Products"
          onClick={() => navigate("/products")}
          className="border-0"
        />
        <Menu.Item
          as="button"
          content="Product Categories"
          onClick={() => navigate("/category")}
          className="border-0"
        />

        <Menu.Menu position="right">
          <Menu.Item
            as="button"
            content="Profile"
            onClick={() => navigate("/profile")}
            className="border-0"
          />
          <Menu.Item as="button" content="Logout" className="border-0" onClick={handleLogout} />
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default Header;
