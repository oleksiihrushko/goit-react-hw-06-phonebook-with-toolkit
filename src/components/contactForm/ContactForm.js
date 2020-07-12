import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <input
            style={{ borderRadius: 4 }}
            name="name"
            type="text"
            value={name}
            onChange={this.changeHandler}
          />
        </label>
        <br />
        <label>
          Number
          <br />
          <input
            style={{ borderRadius: 4, marginBottom: 5 }}
            name="number"
            type="text"
            value={number}
            onChange={this.changeHandler}
          />
        </label>
        <br />
        <button style={{ borderRadius: 4, padding: 4 }} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default connect(null, {
  onSubmit: contactsActions.addContact,
})(ContactForm);
