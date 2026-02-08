import "./App.css";
import DessertsList from "./DessertsList";
import {useState} from 'react';

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
  }

  const [slider, setSlider] = useState(5);
  const [comment, setComment] = useState("");


  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />

      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
            <label htmlFor="slider">Score: {slider} ⭐️</label>
            <input 
              id="slider" 
              type="range" 
              min="0" 
              max="10" 
              value={slider} 
              onChange={ (e) => setSlider(e.target.value)} />
          </div>
          <div className="field">
            <label>User Comment</label>
            <textarea 
              value={comment}
              onChange={ (e) => setComment(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type='text'
              placeholder="Name"
              name="name"
              value={name}
              onChange={ (e) => setName(e.target.value)}/>
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
