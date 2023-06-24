import { useState } from 'react';
import './App.css';
import { configuration, OpenAIApi } from "openai";

const ApiKey = process.env.REACT_APP_API_KEY; // Importing the API key

const configuration = new Configuration({
  apikey: ApiKey,
});

const openai = new OpenAIApi(configuration);

function App() {

  async function fetchImage(){
    try{

    } catch(e) {
      console.log(e);
    }
  }
  
  

  console.log(apiKey); //Accessing the api key
  return (
    <div className="App">
      <h1>AI Image Generator</h1>
    </div>
  );
}

export default App;
