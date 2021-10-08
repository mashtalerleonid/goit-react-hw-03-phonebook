// import { v4 as uuidv4 } from "uuid";
import React, { Component } from "react";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/Contacts/ContactList";
import { Container } from "./App.styled";

import store from "./redux/store";

import * as actions from "./redux/phonebook/phonebook-actions";
import { connect } from "react-redux";

{
  // class App extends Component {
  //   state = {
  //     contacts: [],
  //     filter: "",
  //   };
  //   addContact = ({ name, number }) => {
  //     const contact = { id: uuidv4(), name, number };
  //     let isAdded = false;
  //     this.state.contacts.forEach((contact) => {
  //       if (contact.name === name) {
  //         isAdded = true;
  //         return;
  //       }
  //     });
  //     if (isAdded) {
  //       alert(`${name} is already in contacts`);
  //       return;
  //     }
  //     this.setState((prevState) => ({
  //       contacts: [...prevState.contacts, contact],
  //     }));
  //   };
  //   deleteContact = (contactId) => {
  //     this.setState((prevState) => ({
  //       contacts: prevState.contacts.filter(
  //         (contact) => contact.id !== contactId
  //       ),
  //     }));
  //   };
  //   filterChange = (e) => {
  //     const { value } = e.target;
  //     this.setState({ filter: value });
  //   };
  //   filterBlur = (e) => {
  //     this.setState({ filter: "" });
  //   };
  //   getFilteredContacts = () => {
  //     const { filter, contacts } = this.state;
  //     const normalizedFilter = filter.toLowerCase();
  //     return contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   };
  //   componentDidMount() {
  //     const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
  //     if (parsedContacts) {
  //       this.setState({ contacts: parsedContacts });
  //     }
  //   }
  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.contacts !== prevState.contacts) {
  //       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //     }
  //   }
  //   render() {
  //     const { filter } = this.state;
  //     const filteredContacts = this.getFilteredContacts();
  //     return (
  //       <Container>
  //         <h1>Phonebook</h1>
  //         {/* <ContactForm /> */}
  //         <ContactForm addContact={this.addContact} />
  //         <h2>Contacts</h2>
  //         <Filter
  //           filterBlur={this.filterBlur}
  //           filterChange={this.filterChange}
  //           filter={filter}
  //         />
  //         <ContactList
  //           list={filteredContacts}
  //           onDeleteContact={this.deleteContact}
  //         />
  //       </Container>
  //     );
  //   }
  // }
}

function App({
  items,
  filter,
  onAddContact,
  // onDeleteContact,
  // onFilterChange,
  // onFilterBlur,
}) {
  // console.log(store.getState());

  // const filteredItems = (() =>
  //   items.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   ))();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      {/* <ContactForm addContact={this.addContact} /> */}

      <h2>Contacts</h2>
      <Filter
      // filter={filter}
      // onFilterChange={onFilterChange}
      // onFilterBlur={onFilterBlur}
      />
      {/* <Filter
        filterBlur={this.filterBlur}
        filterChange={this.filterChange}
        filter={filter}
      /> */}
      <ContactList
      // items={filteredItems}
      // onDeleteContact={onDeleteContact}
      />
      {/* <ContactList
        list={filteredContacts}
        onDeleteContact={this.deleteContact}
      /> */}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: (contact) => dispatch(actions.addContact(contact)),
    // onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
    // onFilterChange: (event) => dispatch(actions.filterChange(event)),
    // onFilterBlur: () => dispatch(actions.filterBlur()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
