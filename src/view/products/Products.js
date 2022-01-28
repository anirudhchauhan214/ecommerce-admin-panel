import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";

const Products = () => {
  useEffect(() => console.log("Products"), []);
  return (
    <Container>
      <p style={{ color: "black" }}>Products</p>
    </Container>
  );
};

export default Products;
