import React from "react";
import { getInitialData, showFormattedDate } from "../utils";
import ListItem from "./ListItem";
import Input from "./Input";
import PencarianItem from "./PencarianItem";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getInitialData(),
      archivedContacts: [],
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onDeleteArchivedHandler = this.onDeleteArchivedHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  onDeleteArchivedHandler(id) {
    const archivedContacts = this.state.archivedContacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ archivedContacts });
  }

  onAddContactHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(new Date()),
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    const contactToArchive = this.state.contacts.find(
      (contact) => contact.id === id
    );
    if (contactToArchive) {
      this.setState((prevState) => {
        return {
          contacts: prevState.contacts.filter((contact) => contact.id !== id),
          archivedContacts: [...prevState.archivedContacts, contactToArchive],
        };
      });
    }
  }

  onUnarchiveHandler(id) {
    const contactToUnarchive = this.state.archivedContacts.find(
      (contact) => contact.id === id
    );
    if (contactToUnarchive) {
      this.setState((prevState) => {
        return {
          archivedContacts: prevState.archivedContacts.filter(
            (contact) => contact.id !== id
          ),
          contacts: [...prevState.contacts, contactToUnarchive],
        };
      });
    }
  }

  handleSearch = (searchQuery) => {
    if (searchQuery === "") {
      this.setState({ contacts: getInitialData() });
    } else {
      const filteredContacts = this.state.contacts.filter((contact) => {
        return contact.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
      this.setState({ contacts: filteredContacts });
    }
  };

  render() {
    return (
      <div className="note-app__body">
        <div className="note-app__header">
          <h1>Aplikasi Catatan</h1>
          <div className="note-input__title__char-limit">
            <PencarianItem onSearch={this.handleSearch} />
          </div>
        </div>
        <h3 className="note-app__title">Tambah Catatan</h3>
        <Input addContact={this.onAddContactHandler} />
        <h1 className="note-app__title">Daftar Catatan</h1>
        {this.state.contacts.length === 0 ? (
          <p className="note-app__title">Tidak ada catatan</p>
        ) : (
          <ListItem
            contacts={this.state.contacts}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        )}
        <h1 className="note-app__title">Arsip Catatan</h1>
        {this.state.archivedContacts.length === 0 ? (
          <p className="note-app__title">Tidak ada catatan di arsip</p>
        ) : (
          <ListItem
            contacts={this.state.archivedContacts}
            onUnarchive={this.onUnarchiveHandler}
            onDeleteArchived={this.onDeleteArchivedHandler}
          />
        )}
      </div>
    );
  }
}

export default Body;
