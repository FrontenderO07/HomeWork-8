import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Users from "./components/Users/Users";
import Timer from "./components/timer/Timer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timer , setTimer] = useState(false)
  const [users , setUsers] = useState(false)
  useEffect(() => {
const result = localStorage.getItem("USER")
setIsLoggedIn(Boolean(result))
  },[])

  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("USER", JSON.stringify(true))
  };
 
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("USER")
    setTimer(false)
  };

  const showUsersHandler = () =>{
    setUsers(true)
    setTimer(false)
  }

  const startTimerHandler = () => {
  setTimer(true)
  setUsers(false)
  }
  const loginedState = !users && !timer && isLoggedIn
  const showUsers = users && isLoggedIn
  const showTimer = timer && isLoggedIn 
  return (
    <React.Fragment>
      <MainHeader showUsersHandler={showUsersHandler} isAuthenticated={isLoggedIn} onLogout={logoutHandler} startTimerHandler={startTimerHandler}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {loginedState && <Users/>}
        {showUsers && <Users/>}
       {showTimer && <Timer/>}
      </main>
    </React.Fragment>
  );
}

export default App;
