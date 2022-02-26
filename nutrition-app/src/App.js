import logo from './logo.svg';
import './App.css';
import FoodForm from './FoodForm'

function App() {
  
  useEffect(() => {
  fetch('/search/')
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
