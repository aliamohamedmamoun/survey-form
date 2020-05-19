import React from "react";
import CheckBox from "./CheckBox";
import Radio from "./Radio";
import Option from "./Option";

class Form extends React.Component {
  state = {
    checkboxData: [
      { value: "front end projects", label: "Front-end Projects" },
      { value: "back end projects", label: "Back-end Projects" },
      { value: "data visualization", label: "Data Visuaization" },
      { value: "challenges", label: "Challenges" },
      { value: "open source community", label: "Open Source Community" },
      { value: "gitter help rooms", label: "Gitter help rooms" },
      { value: "videos", label: "Videos" },
      { value: "city-meetups", label: "City Meetups" },
      { value: "wiki", label: "Wiki" },
      { value: "forum", label: "Forum" },
      { value: "add-courses", label: "Additional Courses" }
    ]
  };
  render() {
    return (
      <form id="survey-form">
        <div>
          <label id="name-label" htmlFor="name">
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
          <label id="email-label" htmlFor="email">
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
          <label id="number-label" htmlFor="number">
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
        <div>
          <label id="dropdown-label" htmlFor="dropdown">
            Which option best describes your current role?
          </label>
          <select id="dropdown" name="dropdown">
            <Option
              value="Select current role"
              disabled={true}
              selected={true}
            />
            <Option value="Student" />
            <Option value="Full Time Job" />
            <Option value="Full Time learner" />
            <Option value="Prefer not to say" />
            <Option value="Other" />
          </select>
        </div>
        <div>
          <label htmlFor="recommendation">
            Would you recommend freeCodeCamp to a friend?
          </label>
          <div id="recommendation">
            <Radio
              value="definitely"
              label="Definitely"
              name="recommendation"
              checked={true}
            />
            <Radio value="maybe" label="Maybe" name="recommendation" />
            <Radio value="not-sure" label="Not sure" name="recommendation" />
          </div>
        </div>
        <div>
          <label htmlFor="improved">
            What would you like to see improved?(check all that apply){" "}
          </label>
          <div id="improved">
            <CheckBox checkboxData={this.state.checkboxData} />
          </div>
        </div>
        <div>
          <label id="dropdown-label" htmlFor="dropdown">
            What is your favorite feature of freeCodeCamp?
          </label>
          <select id="dropdown" name="dropdown">
            <Option value="select-option" disabled={true} selected={true}>
              Select an option
            </Option>
            <Option value="challenges">Challenges</Option>
            <Option value="projects">Projects</Option>
            <Option value="community">Community</Option>
            <Option value="open-source">Open Source</Option>
          </select>
        </div>

        <div>
          <label htmlFor="comments">Any comments or suggestions?</label>
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
