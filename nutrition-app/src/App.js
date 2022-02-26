// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
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
  const [allergies, setAllergies] = useState({}); // set all the default to false here for the allergies
  const [diets, setDiets] = useState({}); // set all the default to false here for the diets

  const handleCaloriesInput = (newCal) =>{
    setCalories(newCal);
  }

  const handleAllergiesInput = (newAllergiesInput) =>{
    setAllergies(newAllergiesInput);
  }

  const handleDietInput = (newDietInput) =>{
    setDiets(newDietInput);
  }



  useEffect(() => {
  fetch('http://127.0.0.1:5000/search/')
  .then(response => {
      console.log(response)
      response.json()
      .then(data => {
        console.log(data)
      })
    })
  });

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
