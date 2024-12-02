import { Component } from "react";
import MyNavBar from "../Components/MyNavBar";
import MyGallery from "../Components/MyGallery";
import MyFooter from "../Components/MyFooter";
import MySearchBar from "../Components/MySearchBar";

class Home extends Component {
  state = {
    queryFilm: "Star Wars",
  };

  handleSearch = (searchQuery) => {
    this.setState({ queryFilm: searchQuery });
  };

  render() {
    return (
      <div className="w-full">
        <header className="w-full">
          <MyNavBar></MyNavBar>
          <div className="flex justify-center">
            <MySearchBar onSearch={this.handleSearch}></MySearchBar>
          </div>
        </header>
        <main className="bg-black mt-6">
          <h2 className="text-white ms-12 font-bold text-4xl">
            Risultati di ricerca
          </h2>
          <MyGallery query={this.state.queryFilm}></MyGallery>
          <h2 className="text-white ms-12 font-bold text-4xl mt-5">
            Lord of the ring
          </h2>
          <MyGallery query={"Lord of the ring"}></MyGallery>
          <h2 className="text-white ms-12 font-bold text-4xl mt-5">
            Harry Potter
          </h2>
          <MyGallery query={"Harry Potter"}></MyGallery>
        </main>
        <footer>
          <MyFooter></MyFooter>
        </footer>
      </div>
    );
  }
}

export default Home;
