import { useState } from 'react';
import './App.css';

const apiKey = process.env.REACT_APP_API_KEY; // Importing the API key


function App() {
  
  const [count, setCount] = useState(0);

  console.log(apiKey); //Accessing the api key
  return (
    <div className="App">
      <h1>AI Image Generator</h1>
    </div>
  );
}

export default App;
