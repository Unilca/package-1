import "./../styles/checklist.scss";
import React, { useState } from "react";

function Checklist() {
  const [value, setValue] = useState();
  const [id, setId] = useState(0);

  const [todo, setTodo] = useState([]);

  return (
    <div className="checklist">
      <div className="checklist__input">
        <input
          className="checklist__input__window"
          maxlength="50  "
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <div
          className="checklist__input__plus"
          onClick={() => {
            if (value) {
              setValue("");
              setTodo([...todo, { id: id, title: value }]);
              setId(id + 1);
            }
          }}
        >
          +
        </div>
      </div>
      <div className="checklist__list">
        {todo.map((props) => {
          return (
            <div className="checklist__list__block">
              <div
                key={props.id}
                id={props.id}
                className="checklist__list__block__todoTitle"
              >
                <input type="checkbox" /> {props.title}
              </div>
              <buttom
                className="checklist__list__block__btn"
                onClick={() => {
                  const result = todo.filter((elem) => elem.id !== props.id);
                  setTodo(result);
                }}
              >
                X
              </buttom>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Checklist;
