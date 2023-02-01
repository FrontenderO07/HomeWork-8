import styled from "styled-components";

const Navigation = (props) => {
  return (
    <Nav>
      <StyledUl>
        <ListItem>
          <Button onClick={props.showUsersHandler}>
            Users
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={props.startTimerHandler}>Timer</Button>
        </ListItem>
        <ListItem>
          <Button onClick={props.onLogout}>Logout</Button>
        </ListItem>
      </StyledUl>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;
const ListItem = styled.li`
  margin: 0;
  margin-left: 2rem;
`;
const Button = styled.button`
  font: inherit;
  background: #dd0db0;
  border: 1px solid #dd0db0;
  padding: 0.5rem 1.5rem;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border-radius: 20px;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    color: #f3cafb;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
  }
`;
