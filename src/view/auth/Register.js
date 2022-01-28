import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";
import { UserApi } from "../../api/UserApi";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    UserApi.register(data).then((res) => {
      if (res.data.status === true) {
        navigate("/login");
      }
    });
  };

  return (
    <>
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Create an account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                required
                name="name"
                icon="user"
                iconPosition="left"
                placeholder="Enter your full name"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                required
                name="email"
                type="email"
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                required
                name="phone"
                type="number"
                icon="phone"
                iconPosition="left"
                placeholder="Enter your phone number"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                required
                name="address"
                icon="address card"
                iconPosition="left"
                placeholder="Enter your address"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                required
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={handleChange}
              />
              {/* <Form.Input
                fluid
                name="confirmPass"
                icon="lock"
                iconPosition="left"
                placeholder="confirm Password"
                type="password"
                onChange={handleChange}
              /> */}

              <Button color="teal" fluid size="large" onClick={handleRegister}>
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            <Link to="/login">back to login?</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Register;
