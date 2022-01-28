import React from "react";
import { Container, Segment } from "semantic-ui-react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
