import React from 'react';
class Radio extends React.Component{
    render(){
        return(
            <div>
            <label for="recommendation">Would you recommend freeCodeCamp to a friend?</label>
            <div id="recommendation">
            <input type="radio" id="definitely" name="recommendation" value="definitely" checked />
            <label for="defnitely"> Defnitely</label>
            <input type="radio" id="maybe" name="recommendation" value="maybe" />
            <label id="maybe-label" for="maybe" >Maybe</label>
            <input type="radio" id="not-sure" name="recommendation" value="not sure" />
            <label for="not-sure"> Not sure</label>
             </div>
             </div>
        );
    }
}
export default Radio;
