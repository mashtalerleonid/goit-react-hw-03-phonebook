import actionTypes from "./phonebook-types";

export const addContact = (contact) => ({
  type: actionTypes.ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (contactId) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: contactId,
});

export const filterChange = (text) => ({
  type: actionTypes.FILTER_CHANGE,
  payload: text,
});

export const filterBlur = () => ({
  type: actionTypes.FILTER_BLUR,
  payload: "",
});
