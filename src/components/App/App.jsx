import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { contactsData } from 'data/contactsData.js';
import { AppContainer, Title, SubTitle } from './App.styled.jsx';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';

export class App extends Component {
  state = {
    contacts: contactsData,
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: data.name, number: data.number },
      ],
    }));
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  deleteContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterNames = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <ContactForm
          contacts={contacts}
          submitHandler={this.formSubmitHandler}
        />
        <SubTitle>Contacts</SubTitle>
        <Filter filter={filter} changeHandler={this.handleInputChange} />
        <ContactList
          contacts={contacts}
          filterNames={filterNames}
          deleteContact={this.deleteContact}
        />
      </AppContainer>
    );
  }
}
