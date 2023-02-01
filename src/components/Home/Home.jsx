import React from "react";
import styled from "styled-components";
import Card from "../UI/Card/Card";

const Home = () => {
  return (
    <Card>
      <H1>Welcome back!</H1>
    </Card>
  );
};

export default Home;

const H1 = styled.h1`
  font-size: 35px;
  color:black;
`
