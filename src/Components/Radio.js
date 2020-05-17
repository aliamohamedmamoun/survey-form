import React from "react";
import "./Radio.css";
class Radio extends React.Component {
  render() {
    return (
      <div className="radio">
        <input
          type="radio"
          id={this.props.value}
          name={this.props.name}
          value={this.props.value}
          checked={this.props.checked}
        />
        <label htmlFor={this.props.value}>{this.props.label}</label>
      </div>
    );
  }
}
export default Radio;
