import { Component } from "react";
import MyNavBar from "../Components/MyNavBar";

class Home extends Component {
  render() {
    return (
      <div className="w-full">
        <header className="w-full">
          <MyNavBar></MyNavBar>
        </header>
        <main className="bg-black"></main>
      </div>
    );
  }
}

export default Home;
