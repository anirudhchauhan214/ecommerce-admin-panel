import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";
import { UserApi } from "../../api/UserApi";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    UserApi.login(credentials).then((res) => {
      if (res.data.status === true) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("uId", res.data.data.userId);
        navigate("/");
      }
    });
  };
  return (
    <>
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                required
                name="email"
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
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

              <Button color="teal" fluid size="large" onClick={handleLogin}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/register">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Login;
