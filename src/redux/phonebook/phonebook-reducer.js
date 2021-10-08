import { v4 as uuidv4 } from "uuid";
import { combineReducers } from "redux";
import actionTypes from "./phonebook-types";

const initialItems = [
  { id: "4545", name: "Leon", number: "158 44 77" },
  { id: "7878", name: "Tom", number: "265 44 77" },
];

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER_CHANGE:
      return payload;

    case actionTypes.FILTER_BLUR:
      return payload;

    default:
      return state;
  }
};

const itemsReducer = (state = initialItems, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT:
      const newContact = {
        id: uuidv4(),
        name: payload.name,
        number: payload.number,
      };
      let isAdded = false;

      state.forEach((item) => {
        if (item.name === newContact.name) {
          isAdded = true;
          return;
        }
      });

      if (isAdded) {
        alert(`${payload.name} is already in contacts`);
        return state;
      }

      return [...state, newContact];

    case actionTypes.DELETE_CONTACT:
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
