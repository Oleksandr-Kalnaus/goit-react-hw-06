import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import "modern-normalize";

export default function App() {
  const contacts = useSelector(selectContacts);
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const addContactAction = (newContact) => {
    dispatch(addContact(newContact));
  };

  const deleteContactAction = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContactAction} />
      <SearchBox />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContactAction}
      />
    </div>
  );
}
