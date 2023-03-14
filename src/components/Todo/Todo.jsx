import React, { useRef, useReducer } from "react";
import { MdDelete } from "react-icons/md";
import { CiPaperplane } from "react-icons/ci";
import "./Todo.scss";

const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

const addItemAction = (name) => ({ type: ACTIONS.ADD, name });
const removeItemAction = (index) => ({ type: ACTIONS.REMOVE, index });

export const Todo = () => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(
    (currItems, action) => {
      switch (action.type) {
        case ACTIONS.ADD:
          return [...currItems, { id: currItems.length, name: action.name }];

        case ACTIONS.REMOVE:
          return currItems.filter((_, index) => index !== action.index);

        default:
          return currItems;
      }
    },
    [
      { id: 1, name: "Hadriel" },
      { id: 1, name: "Afek" },
      { id: 1, name: "Maor" },
      { id: 1, name: "a long long long long long text" },
    ]
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addItemAction(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input ref={inputRef} />
        <button onClick={onSubmitHandler} className="submit">
          <CiPaperplane />
        </button>
      </form>
      <ul className="list">
        {items.map((item, index) => (
          <li key={item.id} className="item">
            <span className="title" title={item.name}>
              {item.name}
            </span>

            <div className="delete tooltip" data-tip={`Delete: ${item.name}`}>
              <MdDelete
                className="delete"
                color="red"
                onClick={() => dispatch(removeItemAction(index))}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
