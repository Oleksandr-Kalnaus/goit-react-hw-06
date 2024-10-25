// contactsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: JSON.parse(localStorage.getItem("contacts")) ?? [],
    },
  },
  filters: {
    name: "",
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    selectContact: (state, action) => {
      state.contacts.items = state.contacts.items.map((contact) => {
        if (contact.id !== action.payload) {
          return contact;
        }
        return {
          ...contact,
          selected: !contact.selected,
        };
      });
    },
  },
});

export const { addContact, deleteContact, selectContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
