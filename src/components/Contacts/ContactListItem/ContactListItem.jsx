import { Item } from "./ContactListItem.styled";
import { connect } from "react-redux";
import * as actions from "../../../redux/phonebook/phonebook-actions";

function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <Item>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </Item>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactListItem);

export default ContactListItem;
