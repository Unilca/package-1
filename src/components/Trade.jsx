import React from "react";
import { AppContext } from "../App";
import imgList from "./imgList";
import { NavLink } from "react-router-dom";
import "../styles/styleTrade.scss";

function Trade() {
  const { stateA, setStateA } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="content__label">Tea & Juice & IceCream 😊</div>
      <div className="content__slider">
        <div className={"content__slider__slide " + `switch${stateA}`}>
          {imgList.map((inf) => {
            return (
              <img
                className="content__slider__slide__img"
                key={inf.id}
                src={inf.src}
                alt={inf.name}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className="content__label">
          {imgList[stateA].name + " " + imgList[stateA].price}
        </div>

        <button
          className="content__btn"
          onClick={() => {
            stateA === 2 ? setStateA(1) : setStateA(0);
          }}
        >
          ←
        </button>

        <button
          className="content__btn"
          onClick={() => {
            stateA === 0 ? setStateA(1) : setStateA(2);
          }}
        >
          →
        </button>
      </div>

      <NavLink to="/cart" className="content__btn">
        Buy 😎
      </NavLink>
    </div>
  );
}

export default Trade;
