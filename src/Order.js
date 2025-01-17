import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  let [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders => orders + 1);
  };

  return (
    <li className="restaurant-li">
      <p>
        {props.orderType}: {orders}
      </p>
      <RestaurantButton addOrder={orderOne} />
    </li>
  );
};

export default Order;
