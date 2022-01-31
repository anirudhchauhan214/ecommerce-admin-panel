import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Segment } from "semantic-ui-react";
import { UserApi } from "../../api/UserApi";

const EditUser = ({ data, onOpen, onClose, open }) => {
  const [userData, setUserData] = useState(data);
  const [jwt, setJwt] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setJwt(token);
    setUserData(data);
  }, [data]);

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
    };

    UserApi.updateUser(userData.userId, updatedData, jwt).then((res) => {
      if (res.data.status === true) {
        onClose();
      }
    });
  };

  return (
    <Modal onClose={onClose} onOpen={onOpen} open={open}>
      <Modal.Header>Edit User</Modal.Header>
      <Modal.Content>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              required
              name="name"
              icon="user"
              iconPosition="left"
              placeholder="Enter your full name"
              value={userData?.name}
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
              value={userData?.email}
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
              value={userData?.phone}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              required
              name="address"
              icon="address card"
              iconPosition="left"
              placeholder="Enter your address"
              value={userData?.address}
              onChange={handleChange}
            />
          </Segment>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={onClose}>
          Cancel
        </Button>
        <Button
          content="Add User"
          labelPosition="right"
          icon="checkmark"
          onClick={handleSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default EditUser;
