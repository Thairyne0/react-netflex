import React, { Component } from "react";

class MyModal extends Component {
  render() {
    const { film, onClose } = this.props;

    if (!film) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-black text-white p-5 rounded-lg w-80 relative">
          {/* Bottone per chiudere il modale */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-red-600 rounded p-1 px-2"
          >
            ✖
          </button>
          {}
          <img
            src={film.Poster}
            alt={film.Title}
            className="w-full h-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{film.Title}</h2>
          <p className="text-gray-400 mb-2">Anno: {film.Year}</p>
        </div>
      </div>
    );
  }
}

export default MyModal;
