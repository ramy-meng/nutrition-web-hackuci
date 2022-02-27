import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import './App.css';
// import FoodForm from './FoodForm'
import Filterbar from './components/filterBar/filterBar'
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profie/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';


function App() {
  const authCtx = useContext(AuthContext);
  const [calories, setCalories] = useState(-1);
  const [allergies, setAllergies] = useState(
    {
        "Alcohol Free" : false,
        "Celery Free": false,
        "Dairy Free":false,
        "Egg Free" : false,
        "Fish Free":false,
        "FODMAP Free":false,
        "Gluten Free":false,
        "Lupine Free":false,
        "Mollusk Free":false,
        "Mustard Free":false,
        "Peanut Free":false,
        "Pork Free":false,
        "Shellfish Free": false,
        "Soy Free":false,
        "Sulfite Free": false,
        "Tree Nut Free":false,
        "Wheat Free" : false

    }); // set all the default to false here for the allergies
  const [diets, setDiets] = useState(
    {
      "vegan": false,
      "vegetarian" :false
    }); // set all the default to false here for the diets

  const handleCaloriesInput = (newCal) =>{
    console.log("old cal ", calories)
    setCalories(newCal);
    console.log("new cal ", calories)
  }

  const handleAllergiesInput = (newAllergiesInput) =>{
    setAllergies(newAllergiesInput);
  }

  const handleDietInput = (newDietInput) =>{
    setDiets(newDietInput);
  }


  useEffect(() => {
    //console.log(allergies)
  fetch('http://127.0.0.1:5000/search/')
  .then(response => {
      console.log(response)
      response.json()
      .then(data => {
        console.log(data)
      })
    })
  }, [allergies]);

  return (
    <Layout>
      <Routes>
        <Route path='/' element = {
          <div className="App">
            <Filterbar 
            calories = {calories} caloriesChanged = {handleCaloriesInput} 
            allergies = {allergies} allergiesChanged = {handleAllergiesInput}
            diets = {diets} dietsChanged = {handleDietInput}
            ></Filterbar>
          </div>
        } />
        {!authCtx.isLoggedIn && <Route path='/auth' element = {<AuthPage />}/>}

        <Route path='/profile' element = { authCtx.isLoggedIn ? <UserProfile /> : <Navigate to='/auth' />}/>
      </Routes>
    </Layout>

  );

  // return (
    // <div className="App">
    //   <FoodForm></FoodForm>
    //   <Filterbar 
    //   calories = {calories} caloriesChanged = {handleCaloriesInput} 
    //   allergies = {allergies} allergiesChanged = {handleAllergiesInput}
    //   diets = {diets} dietsChanged = {handleDietInput}
    //   ></Filterbar>
    // </div>
  // );
}

export default App;
