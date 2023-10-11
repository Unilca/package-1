import { NavLink } from "react-router-dom";
import { AppContext } from "../App";
import imgList from "./imgList";
import React from "react";
import "../styles/styleCart.scss";

function Cart() {
  const { stateA, setStateA } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="content__label">Shopping cart</div>
      <div className="productBox">
        <img
          className="productBox__img"
          src={imgList[stateA].src}
          alt={imgList[stateA].name}
        />
        <div className="productBox__product">
          <div className="productBox__product__name">
            {imgList[stateA].name}
          </div>

          <div className="productBox__product__description">
            {imgList[stateA].description}
          </div>

          <div />
        </div>
      </div>

      <div>
        <NavLink className="content__btn" to="/">
          Back
        </NavLink>
        <button
          className="content__btn"
          onClick={() => {
            alert("Payed");
          }}
        >
          Pay {imgList[stateA].price}
        </button>
      </div>
    </div>
  );
}

export default Cart;
