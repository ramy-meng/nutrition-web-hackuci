import React from "react";

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
            <input type="text" placeholder="Food or Recipe" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default FoodForm
