import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card/Card";

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Card>
      <UsersUl>
        {users.map((user) => (
          <List key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </List>
        ))}
      </UsersUl>
    </Card>
  );
};

export default Users;

const UsersUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 30px;
  /* text-align: center; */
`;
const List = styled.li`
  padding: 0px;
  margin-top: 30px;
  width: 300px;
  font-size: 20px;
`;
