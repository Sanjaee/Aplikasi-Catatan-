import React from "react";

class PencarianItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
    this.props.onSearch(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Cari catatan..."
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
        />
      </div>
    );
  }
}

export default PencarianItem;
