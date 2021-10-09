// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

class App extends Component {
  state = {
    searchName: "",
    largeImageURL: "",
    tags: "",
    showModal: false,
  };
  handleSubmit = (searchName) => {
    this.setState({ searchName });
  };

  onOpenModal = (e) => {
    this.setState({
      largeImageURL: e.target.dataset.source,
      tags: e.target.dataset.alt,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, largeImageURL, tags } = this.state;

    return (
      <div>
        <Searchbar submit={this.handleSubmit} />
        <ImageGallery
          onOpenModal={this.onOpenModal}
          searchName={this.state.searchName}
        />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
export default App;
