import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import { UserApi } from "../../api/UserApi";
import EditUser from "../../components/modals/EditUser";

const tableHeaders = ["Name", "Email", "Phone", "Address", "Role", "Created At", "Actions"];
const Users = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [jwt, setJWT] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setJWT(token);
    getUsers(token);
  }, []);

  const getUsers = (token) => {
    UserApi.getAllUsers(token).then((res) => {
      if (res.data.status === true) {
        setData(res.data.users);
      }
    });
  };

  const handleUserDelete = (e, userId) => {
    e.preventDefault();
    UserApi.deleteUser(jwt).then((res) => {
      const filtered = data.filter((user, i) => userId !== user.userId);
      console.log(filtered);
      console.log(res);
    });
  };

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => setOpen(false);

  return (
    <>
      <Table singleLine>
        <Table.Header>
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
                    <Button icon="edit" onClick={onOpen} />
                    <Button
                      icon="user delete"
                      className="mx-2"
                      onClick={(e) => handleUserDelete(e, user.userId)}
                    />
                    <EditUser key={i} onClose={onClose} onOpen={onOpen} open={open} data={user} />
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </>
  );
};

export default Users;
