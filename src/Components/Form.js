import React from "react";
import CheckBox from "./CheckBox";
import Radio from "./Radio";
import Dropdown from "./Dropdown";

class Form extends React.Component {
  render() {
    return (
      <form id="survey-form">
        <div>
          <label id="name-label" for="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label id="email-label" for="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div>
          <label id="number-label" for="number">
            Age(from 17 to 70):
          </label>
          <input
            type="number"
            id="number"
            name="number"
            min="17"
            max="70"
            placeholder="Age "
          />
        </div>
        <Dropdown id="1" />
        <Radio />

        <CheckBox />
        <Dropdown id="2" />
        <div>
          <label for="comments">Any comments or suggestions?</label>
          <textarea
            id="comments"
            placeholder="Enter your comment here..."
            rows="5"
          ></textarea>
        </div>

        <input type="submit" id="submit" name="Submit" />
      </form>
    );
  }
}
export default Form;
