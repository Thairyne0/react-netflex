import { Component } from "react";
import MyNavBar from "../Components/MyNavBar";
import MyGallery from "../Components/MyGallery";
import MyFooter from "../Components/MyFooter";

class Home extends Component {
  render() {
    return (
      <div className="w-full">
        <header className="w-full">
          <MyNavBar></MyNavBar>
        </header>
        <main className="bg-black mt-6">
          <MyGallery query={"star wars"}></MyGallery>
          <MyGallery query={"Lord of the ring"}></MyGallery>
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
