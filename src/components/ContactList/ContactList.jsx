import { ContactListComponent } from 'components/ContactListComponent/ContactListComponent';

export const ContactList = ({ values, deleteContact }) => (
  <ul>
    {values.map(contact => (
          <ContactListComponent
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      }
  </ul>
);

