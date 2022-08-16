import React from "react";
import "../Header.css";
import { MdShoppingBasket } from "react-icons/md";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dipatch = useDispatch();

  const toggleHandler = () => {
    dipatch(uiActions.toggle());
  };

  return (
    <div className="wrapper-bottom">
      <div className="positioning-class" onClick={toggleHandler}>
        <MdShoppingBasket className="outer-basket" />
        <span className="badge">{props.cartCount}</span>
      </div>
    </div>
  );
};

export default CartButton;