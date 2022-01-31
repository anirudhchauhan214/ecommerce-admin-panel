import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";

const Home = () => {
  useEffect(() => console.log("Home"), []);
  return <Header>Hello world!!</Header>;
};

export default Home;
