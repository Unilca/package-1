import React from "react";
import "./styles.scss";

const onClickEvent = (e) => {
  e.preventDefault();
  alert("You Clicked Me!");
};

const App = () => {
  return (
    <div className="content">
      <div className={styles.label}>Tea & Juice & IceCream 😊</div>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <img
            className={styles.img}
            src="https://vkusnoitochka.ru/resize/290x286/upload/iblock/450/si3zz7y9y94unt6djx2gw221dc9nx0jh/large.png"
            alt="tea"
          />
          <img
            className={styles.img}
            src="https://vkusnoitochka.ru/resize/290x286/upload/iblock/f67/3kqlujh1qx1oqw5hixxf7jc5lur97dva/large.png"
            alt="juice"
          />
          <img
            className={styles.img}
            src="https://vkusnoitochka.ru/resize/290x286/upload/iblock/38c/0ii7grmoxo058li8pjwdap6kh36hn1qe/large.png"
            alt="icecream"
          />
        </div>
      </div>
      <div className={styles.label}>Price$</div>
      <button className={styles.btn} onClick={onClickEvent}>
        Next
      </button>
      <button className={styles.btn} onClick={onClickEvent}>
        Buy 😎
      </button>
    </div>
  );
};

export default App;
