import React from 'react';
import './App.css';
import Form from './Components/Form';

class App extends React.Component {
  render() {
  return(
 <div>
  <h1 id="title" >Survey Form</h1>
  <p id ="description" >Thank you for taking the time to help us improve the platform</p>
  <Form />
  </div>
  );
  }
}

export default App;
