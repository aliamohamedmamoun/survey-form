import React from "react";
import "./Checkbox.css";
const CheckBox = props => {
  return props.checkboxData.map(checkbox => (
    <div className="checkbox">
      <input type="checkbox" value={checkbox.value} />
      <label htmlFor={checkbox.value}>{checkbox.label}</label>
    </div>
  ));
};

export default CheckBox;
