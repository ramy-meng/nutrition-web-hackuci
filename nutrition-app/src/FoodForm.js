import React from "react";
import { useState } from "react";


function FoodForm({ addUserInput }) {

  const [userInput, setUserInput] = useState();
  

  const handleSubmit = (e) => {
    addUserInput(userInput);
    e.preventDefault();
  }
 
  return (
    <form onSubmit={e => {handleSubmit(e)}}>
      
      <input name="userInput" type="text" placeholder="food or recipe" value={userInput || ""} onChange={e => setUserInput(e.target.value)}/>      
      <input className='submitButton' type="submit" value='Search' />

     
    </form>
  )
}

/*
class FoodForm extends React.Component {
    constructor(props) {
      super(props);
      // initialize an empty state
      this.state = {value: ''};
    
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Entered Item: ' + this.state.value);
      event.preventDefault();
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="food or recipe" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
*/
  export default FoodForm
