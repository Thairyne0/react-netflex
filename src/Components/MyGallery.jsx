import { Component } from "react";
import MyCard from "./MyCard";
import MyModal from "./MyModal";

class MyGallery extends Component {
  state = {
    selectedFilm: null, // Film selezionato
    showModal: false, // Stato del modale
    isLoading: true,
    filmObj: [],
  };

  openModal = (film) => {
    this.setState({ selectedFilm: film, showModal: true }); // Imposta il film selezionato
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedFilm: null }); // Resetta il modale
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=8e84b68a&s=${this.props.query}`) // URL dell'API
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella risposta dell’API");
        }
        return response.json(); // Converte la risposta in JSON
      })
      .then((film) => {
        console.log(film);
        this.setState({
          isLoading: false,
          filmObj: film.Search,
        }); // Aggiorna lo stato con i dati
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false }); // Gestisce eventuali errori
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <div
            className="inline-block h-12 w-12 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5 m-5 mb-0">
        {this.state.filmObj.slice(0, 6).map((film) => (
          <MyCard
            key={film.imdbID}
            img={film.Poster}
            title={film.Title}
            year={film.Year}
            onCardClick={() => this.openModal(film)}
          ></MyCard>
        ))}
        {this.state.showModal && (
          <MyModal
            film={this.state.selectedFilm}
            onClose={this.closeModal}
          ></MyModal>
        )}
      </div>
    );
  }
}

export default MyGallery;
