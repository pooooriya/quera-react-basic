import { useState } from "react";
import Card from "../Card";

const Layout = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <Card
      title="salam quera2222"
      onClickIncrement={handleIncrement}
      onClickDecrement={handleDecrement}
      data={count}
    >
      Hello World
    </Card>
  );
};

export default Layout;
