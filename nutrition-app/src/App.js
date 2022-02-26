import React, { useEffect } from 'react';
import './App.css';
import FoodForm from './FoodForm'






function App() {

  useEffect(() => {
  fetch('http://127.0.0.1:5000/search')
  .then(response => {
      console.log(response)
      response.json()
      .then(data => {
        console.log(data)
      })
    })
  })

  return (
    <div className="App">
      <FoodForm></FoodForm>
    </div>
  );
}

export default App;
