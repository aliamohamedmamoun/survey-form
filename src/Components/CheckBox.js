import React from "react";
import "./Checkbox.css";
const CheckBox = props => {
  return (
    <div className="checkbox">
      <input type="checkbox" value={props.value} />
      <label htmlFor={props.value}>{props.label}</label>
    </div>
  );
};

export default CheckBox;
