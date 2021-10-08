import React, { Component } from "react";
import { Form, Label } from "./ContactForm.styled";

import { connect } from "react-redux";

class ContactForm extends Component {
  state = { name: "", number: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <input
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>

        <Label>
          Number
          <input
            value={this.state.number}
            onChange={this.handleChange}
            autoComplete="off"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </Label>

        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

export default ContactForm;

// ContactForm.propTypes = {
//   addContact: PropTypes.func,
// };

// import { handleNameChange, handleNumberChange } from "../../redux/actions";

// function ContactForm({ name, number, onNameChange, onNumberChange }) {
//   return (
//     <Form>
//       {/* <Form onSubmit={this.handleSubmit}> */}
//       <Label>
//         {name}
//         <input
//           // value={name}
//           onChange={onNameChange}
//           autoComplete="off"
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//         />
//       </Label>

//       <Label>
//         {number}
//         <input
//           // value={number}
//           onChange={onNumberChange}
//           autoComplete="off"
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//         />
//       </Label>

//       {/* <button type="submit">Add contact</button> */}
//     </Form>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     name: state.data.name,
//     number: state.data.number,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onNameChange: (e) => dispatch(handleNameChange(e)),
//     onNumberChange: (e) => dispatch(handleNumberChange(e)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
