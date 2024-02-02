import React from "react";

import "./style.module.css";

const Card = ({
  title,
  data,
  onClickDecrement,
  onClickIncrement,
  children
}) => {
  return (
    <div>
      <h5>{title}</h5>
      <h6>{data}</h6>
      <div>
        {children}
        <button onClick={onClickIncrement}>+</button>
        <button onClick={onClickDecrement}>-</button>
      </div>
    </div>
  );
};

export default Card;
