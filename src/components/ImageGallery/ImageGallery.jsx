import { Component } from "react";
import API from "../../API/pixabay-api";
import Button from "../Button";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import LoaderComponent from "../Loader/Loader";
import { toast } from "react-toastify";
import s from "../ImageGallery/ImageGallery.module.css";

export default class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    searchName: "",
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    if (prevName !== nextName) {
      this.toggleLoader();
      API.imageAPI(nextName, page)
        .then((image) => {
          if (image.hits.length === 0) {
            toast.error("No images found on your query");
          }
          this.setState({
            images: image.hits,
            page: 1,
            searchName: nextName,
          });
          this.toggleLoader();
        })
        .catch(this.setState({ error: "no images on request" }));
    }
  }

  loadMore = () => {
    const { searchName, page } = this.state;

    this.toggleLoader();

    API.imageAPI(searchName, page + 1)
      .then((image) => {
        this.setState(({ images, page }) => ({
          images: [...images, ...image.hits],
          page: page + 1,
        }));
        this.toggleLoader();

        if (page >= 1) {
          setTimeout(() => {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          }, 800);
        }
      })
      .catch(this.setState({ error: "no images on request" }));
  };

  toggleLoader = () => {
    this.setState(({ loading }) => ({
      loading: !loading,
    }));
  };

  render() {
    const { images, loading } = this.state;
    const { onOpenModal } = this.props;
    return (
      <div>
        <ul className={s.ImageGallery}>
          {images.map(({ tags, webformatURL, largeImageURL }, index) => {
            return (
              <ImageGalleryItem
                key={index}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onOpenModal={onOpenModal}
              />
            );
          })}
        </ul>
        {loading && <LoaderComponent />}
        {images.length >= 12 && (
          <Button OnClick={this.loadMore} children={"Show more"} />
        )}
      </div>
    );
  }
}
