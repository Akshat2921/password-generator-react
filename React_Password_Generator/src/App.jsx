import React,{useState,useEffect, useCallback} from 'react';
import './ui.css'

const App = () => {
 
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(20);
    const [numberChange, setNumberChange] = useState(false);
    const [characterChange, setCharacterChange] = useState(false);

    const generatePassword= useCallback(() => {
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      if(numberChange) {
        characters += '0123456789';
      }
      if(characterChange) {
        characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
      }

      let pass=""

      for(let i=0; i<length; i++) {
        const randomPass=characters[Math.floor(Math.random()*characters.length)];
        pass += randomPass;
      }
      setPassword(pass);
    },[length, numberChange, characterChange]);

    useEffect(() => {
      generatePassword();
    }, [generatePassword]);
  return (
    <>
      <h1>Password is : </h1>
      <div className="password-box"> {password} </div>
      <div className='second'>
        <input type="range" min={5} max={50} value={length} onChange={(e) => setLength(Number(e.target.value))}/>
        <label>Length is: {length}</label>

        <input type="checkbox" checked={numberChange} onChange={(e) => setNumberChange(!numberChange)}></input>
        <label>Number</label>

        <input type="checkbox" checked={characterChange} onChange={(e) => setCharacterChange(!characterChange)}></input>
        <label>Character</label>
      </div>
    </>
  )
}

export default App;