import React from "react";
import "./Checkbox.css";
class CheckBox extends React.Component {
  render() {
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
        />
        <label htmlFor={this.props.name}>{this.props.label}</label>
      </div>
    );
  }
}
export default CheckBox;
