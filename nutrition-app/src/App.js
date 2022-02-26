import React, { useEffect } from 'react';
import './App.css';
import FoodForm from './FoodForm'






function App() {
<<<<<<< HEAD

  useEffect(() => {
  fetch('http://127.0.0.1:5000/search')
  .then(response => {
      console.log(response)
=======
  
  useEffect(() => {
  fetch('/search/')
  .then(response => {
      console.log(response)
     
>>>>>>> 00314eea7221a633fb6c33143136ecabe4c11072
      response.json()
      .then(data => {
        console.log(data)
      })
    })
  })
<<<<<<< HEAD

  

=======
>>>>>>> 00314eea7221a633fb6c33143136ecabe4c11072
  return (
    <div className="App">
      <FoodForm></FoodForm>
    </div>
  );
}

export default App;
