import { Component } from "react";
import Section from "../components/section/Section";
import ContactList from "../components/phonebook/contactList/ContactList";
import Phonebook from "../components/phonebook/Phonebook";
import Filter from "../components/phonebook/filter/Filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  componentDidMount() {
    if (localStorage.contacts) {
      const contacts = localStorage.getItem("contacts");
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  toSubmit = (data) => {
    if (
      this.state.contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contact`);
    } else
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, data],
      }));
  };

  handlerFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContact = () => {
    const filterNormalized = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  onButtonDelete = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => id !== contact.id),
      };
    });
  };

  render() {
    const filterShow = this.getFilterContact();
    return (
      <div>
        <Phonebook onSubmit={this.toSubmit} />
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.handlerFilter} />
          <ContactList data={filterShow} onDeleteButton={this.onButtonDelete} />
        </Section>
      </div>
    );
  }
}
export default App;
