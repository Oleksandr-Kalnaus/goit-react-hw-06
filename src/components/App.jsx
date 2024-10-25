import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import "modern-normalize";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addContact, deleteContact } from "../redux/contactsSlice";

export default function App() {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const addContactAction = (newContact) => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };
    dispatch(addContact(finalContact));
  };

  const deleteContactAction = (contactId) => {
    dispatch(deleteContact(contactId));
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
        <ContactForm onAddContact={addContactAction} />
        <SearchBox
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContactAction}
        />
      </div>
    </>
  );
}
