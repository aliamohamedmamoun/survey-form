import React from "react";

class Option extends React.Component {
  render() {
    return (
      <option
        value={this.props.value}
        disabled={this.props.disabled}
        selected={this.props.selected}
      >
        {this.props.value}
      </option>
    );
  }
}

export default Option;
