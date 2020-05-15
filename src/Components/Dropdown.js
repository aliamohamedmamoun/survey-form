import React from "react";

class Dropdown extends React.Component{
    render(){
        if(this.props.id === "1" ){
        return(
            <div>
            <label id="dropdown-label" for="dropdown">Which option best describes your current role?</label>
            <select id="dropdown" name="dropdown" >
               <option value="select-role" disabled selected>Select current role</option>
               <option value="student">Student</option>
               <option value="full-time-job">Full Time Job</option>
               <option value="full-time-learner">Full Time learner</option>
               <option value="prefer-not-say">Prefer not to say</option>
               <option value="other">Other</option>
            </select>
            </div>
        )
        }else {
            return(
            <div>
                <label id="dropdown-label" for="dropdown">What is your favorite feature of freeCodeCamp?</label>
                <select id="dropdown" name="dropdown" >
                       <option value="select-option" disabled selected >Select an option</option>
                       <option value="challenges">Challenges</option>
                       <option value="projects">Projects</option>
                       <option value="community">Community</option>
                       <option value="open-source">Open Source</option>
                    </select>
               </div>
               )
    }
} 
}
export default Dropdown;