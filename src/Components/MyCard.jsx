// http://www.omdbapi.com/?apikey=metti-qui-la-api-key&s=Star Wars
// key 8e84b68a

import { Component } from "react";

class MyCard extends Component {
  render() {
    return (
      <div className=" rounded flex flex-col bg-neutral-900 justify-between  text-white p-2">
        <img
          src={this.props.img}
          alt="Poster non presente"
          className="rounded h-80"
        />

        <p className="m-2">{this.props.title}</p>
        <p className="flex justify-center font-bold">{this.props.year}</p>
      </div>
    );
  }
}

export default MyCard;
