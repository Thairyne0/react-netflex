import { Component } from "react";

class MySearchBar extends Component {
  state = {
    searchQuery: "",
  };

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleButton = () => {
    this.props.onSearch(this.state.searchQuery);
  };

  render() {
    return (
      <div className="p-4 w-5/12 flex gap-2">
        <input
          type="text"
          placeholder="Cerca una saga che ti piace..."
          value={this.state.searchQuery}
          onChange={this.handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          className=" bg-red-600 px-4 rounded font-bold"
          onClick={this.handleButton}
        >
          Search
        </button>
      </div>
    );
  }
}

export default MySearchBar;
