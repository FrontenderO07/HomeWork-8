import React, { useEffect, useRef, useState } from "react";
import Card from "../UI/Card/Card";

const Timer = () => {
  const [countDown, setCountDown] = useState(0);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((prevState) => prevState + 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);
  useEffect(() => {
    if (countDown >= 60) clearInterval(timerId.current);
  }, [countDown]);

  return (
    <Card>
    <div>
      <h1>Timer:{countDown}</h1>
    </div>
    </Card>
  );
};

export default Timer;