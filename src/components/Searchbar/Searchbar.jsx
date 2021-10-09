import { Component } from "react";
import s from "../Searchbar/Searchbar.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Searchbar extends Component {
  state = {
    searchName: "",
    page: 1,
  };

  handleInputChange = (e) => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchName.trim() === "") {
      toast.error("empty string");
      return;
    }
    this.props.submit(this.state.searchName);
    this.setState({ searchName: "" });
  };

  render() {
    const { searchName } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchName"
            value={searchName}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
