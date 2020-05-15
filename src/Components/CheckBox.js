import React from 'react';
class CheckBox extends React.Component{
    render(){

    return(
    <div>
    <label for="improved">What would you like to see improved?(check all that apply) </label>
    <div id="improved">
        <input type="checkbox" id="front-end" name="front-end" value="front end projects" />
        <label for="front-end">Front-end Projects</label>
        <input type="checkbox" id="back-end" name="back-end" value="back end projects"/>
        <label for="back-end">Back-end Projects</label>
        <input type="checkbox" id="data-vis" name="data-vis" value="data visualization"/>
        <label for="data-vis">Data Visuaization</label>
        <input type="checkbox" id="challenges" name="challenges" value="challenges"/>
        <label for="challenges">Challenges</label>
        <input type="checkbox" id="open-source" name="open-source" value="open source community"/>
        <label for="open-source">Open Source Community</label>
        <input type="checkbox" id="gitter-help" name="gitter-help" value="gitter help rooms"/>
        <label for="gitter-help">Gitter help rooms</label>
        <input type="checkbox" id="videos" name="videos" value="videos"/>
        <label for="videos">Videos</label>
        <input type="checkbox" id="city-meetups" name="city-meetups" value="city-meetups"/>
        <label for="city-meetups">City Meetups</label>
        <input type="checkbox" id="wiki" name="wiki" value="wiki" />
        <label for="wiki">Wiki</label>
        <input type="checkbox" id="forum" name="forum" value="forum"/>
        <label for="forum">Forum</label>
        <input type="checkbox" id="add-courses" name="add-courses" value="add-courses"/>
        <label for="add-courses">Additional Courses</label>
    </div>
</div>
);
    };
}
export default CheckBox;
