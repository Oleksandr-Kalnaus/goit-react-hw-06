import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contact/addContact");
export const deleteContact = createAction("contact/deleteContact");
// export const selectContacts = createAction("contact/selectContact");

// const initialState = {
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: "",
//   },
// };

const initialState = {
  contactData: JSON.parse(localStorage.getItem("contacts")) ?? [],
};

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case "contact/addContact": {
      return {
        ...state,
        contactData: [...state.contactData, action.payload],
      };
    }

    case "contact/deleteContact":
      return {
        ...state,
        contactData: state.contactData.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case "contact/selectContact":
      return {
        ...state,
        contactData: state.contactData.map((contact) => {
          if (contact.id !== action.payload) {
            return contact;
          }
          return {
            ...state,
            selected: !contact.selected,
          };
        }),
      };

    default:
      return state;
  }
}
