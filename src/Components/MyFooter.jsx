import { Component } from "react";

class MyFooter extends Component {
  render() {
    return (
      <div className="bg-black flex justify-start text-white grid grid-rows-3 gap-3 mt-24 ms-7">
        <h2>Tommaso Copyright</h2>
        <p>About</p>
        <p>Vuoi Collaborare?</p>
      </div>
    );
  }
}

export default MyFooter;
