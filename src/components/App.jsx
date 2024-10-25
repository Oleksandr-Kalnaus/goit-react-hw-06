import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import "modern-normalize";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

export default function App() {
  const contacts = useSelector((state) => state.contacts.contactData);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const addContact = (newContact) => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };
    const action = { type: "contact/addContact", payload: finalContact };
    dispatch(action);
  };

  const deleteContact = (contactId) => {
    const action = { type: "contact/deleteContact", payload: contactId };
    dispatch(action);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <SearchBox
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </>
  );
}
