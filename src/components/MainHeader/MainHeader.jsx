import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <Header>
      <Logo>A Typical Page</Logo>
      {props.isAuthenticated && (
        <Navigation
          showUsersHandler={props.showUsersHandler}
          onLogout={props.onLogout}
          onLogin={props.loginHandler}
          startTimerHandler={props.startTimerHandler}
        />
      )}
    </Header>
  );
};

export default MainHeader;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 2rem;
`;
const Logo = styled.h1`
  color: white;
`;
