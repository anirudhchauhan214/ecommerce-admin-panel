import React, { useEffect, useState } from "react";
import { Button, Segment, Table } from "semantic-ui-react";
import { UserApi } from "../../api/UserApi";
import EditUser from "../../components/modals/EditUser";
import { ToastContainer, toast } from "react-toastify";
import AddUser from "../../components/modals/AddUser";

const tableHeaders = ["Name", "Email", "Phone", "Address", "Role", "Created At", "Actions"];
const Users = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [addUser,setAddUser] = useState(false);
  const [jwt, setJWT] = useState();
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    setJWT(token);
    getUsers(token);
  }, [data]);

  const getUsers = (token) => {
    UserApi.getAllUsers(token).then((res) => {
      if (res.data.status === true) {
        setData(res.data.users);
      }
    });
  };

  const handleUserDelete = (e, userId) => {
    e.preventDefault();
    UserApi.deleteUser(userId, jwt).then((res) => {
      // const filtered = data.filter((user, i) => userId !== user.userId);
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
      });
    });
  };

  const onOpen = (user) => {
    setOpen(true);
    setSingleUser(user);
  };
  const onClose = () => setOpen(false);

  const handleAddOpen=() => {setA}

  const handleAddClose=() => {}

  return (
    <>
      <Button
        content="Add User"
        icon="add user"
        labelPosition="right"
        positive
        floated="right"
        style={{ margin: "16px" }}
      />
      <ToastContainer />
      <Table color="orange" celled>
        <Table.Header style={{ position: "sticky" }}>
          <Table.Row>
            {tableHeaders.map((header, i) => {
              return <Table.HeaderCell key={i}>{header}</Table.HeaderCell>;
            })}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data !== undefined &&
            data.map((user, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.phone}</Table.Cell>
                  <Table.Cell>{user.address}</Table.Cell>
                  <Table.Cell>{user.role === "1" ? "Customer" : "Admin"}</Table.Cell>
                  <Table.Cell>{user.createdAt}</Table.Cell>
                  <Table.Cell>
                    <Button icon="edit" onClick={() => onOpen(user)} />
                    <Button
                      icon="user delete"
                      className="mx-2"
                      onClick={(e) => handleUserDelete(e, user.userId)}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
      <EditUser onClose={onClose} onOpen={onOpen} open={open} data={singleUser} />
      <AddUser onClose={} onOpen={} open={} data={} />
    </>
  );
};

export default Users;
