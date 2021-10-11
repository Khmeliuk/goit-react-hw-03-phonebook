import { Component } from "react";
import Section from "../section/Section";
import s from "./Phonebook.module.css";
import { v4 as uuidv4 } from "uuid";

export default class Phonebook extends Component {
  constructor() {
    super();
    this.state = { name: "", number: "", id: "" };
  }

  HandleInputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
      id: uuidv4(),
    });
  };

  HandleSubmitButton = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "", id: "" });
  };
  render() {
    return (
      <div className={s.phonebook}>
        <Section title="Phonebook" />
        <form className={s.form} onSubmit={this.HandleSubmitButton}>
          <label className={s.label} htmlFor="name">
            <p className={s.labelName}>Name</p>
            <input
              className={s.input}
              onChange={this.HandleInputChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
            <p className={s.labelName}>Number</p>
            <input
              className={s.input}
              value={this.state.number}
              onChange={this.HandleInputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
            <button className={s.button} type="submit">
              Add contact
            </button>
          </label>
        </form>
      </div>
    );
  }
}
