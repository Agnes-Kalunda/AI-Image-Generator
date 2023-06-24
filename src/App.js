import { useState } from 'react';
import './App.css';
import { Configuration, OpenAIApi } from "openai";

const ApiKey = process.env.REACT_APP_API_KEY; // Importing the API key

const configuration = new Configuration({
  apikey: ApiKey,
});

const openai = new OpenAIApi(configuration);

function App() {
  const [image, setImage] = useState(
    ""
  );

  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");



  async function fetchImage(){
    try{
      setIsLoading(true);
      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512*512",
      })

      setImage(response.data.data[0].url);
      setIsLoading(false);

    } catch(e) {
      setIsLoading(false);
      console.log(e);
    }
  }
  
  

  
  return (
    <div className="App">
      <h1>AI Image Generator</h1>
      <div>
        <input 
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='Enter Prompt'/>
      </div>
      <button onClick={fetchImage}>GENERATE IMAGE</button>
     <div>
      {isLoading ? (
        <>
        <p>Image Loading .....</p>
        <p>Please Wait.</p>
        </>
      ):
      <img src={image}/>
      }
    
      </div> 
    </div>
  );
}

export default App;
