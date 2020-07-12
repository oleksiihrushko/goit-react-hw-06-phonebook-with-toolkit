import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contactsActions';

const onAddContact = (state, action) => {
  if (
    state &&
    state.find(contact => action.payload.contact.name === contact.name)
  ) {
    alert('User with this name is already exist');
    return state;
  } else {
    return [...state, action.payload.contact];
  }
};
const onRemoveContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);
const onChangeFilter = (state, action) => action.payload;

const items = createReducer([], {
  [contactsActions.addContact]: onAddContact,
  [contactsActions.removeContact]: onRemoveContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: onChangeFilter,
});

export default combineReducers({
  items,
  filter,
});
