import ContactListItem from "components/Contacts/ContactListItem/";
import { List } from "./ContactList.styled";

import { connect } from "react-redux";
import * as actions from "../../../redux/phonebook/phonebook-actions";

function ContactList({ items, onDeleteContact }) {
  return (
    <List>
      {items.map((item) => {
        const { id, name, number } = item;

        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
}

const getFilteredItems = (items, filter) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    items: getFilteredItems(items, filter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// export default ContactList;
