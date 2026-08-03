import React,{useState,useEffect} from 'react';
import './ui.css'

const App = () => {
 
    const [Password, setPassword] = useState("");
    const [length, setLength] = useState(20);
    const [numberChange, setNumberChange] = useState(false);
    const [characterChange, setCharacterChange] = useState(false);

    function generatePassword() {
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
    }
    useEffect(() => {
      generatePassword();
    }, [length, numberChange, characterChange]);
  return (
    <>
      <h1>Password is : </h1>
      <div className="password-box"> {Password} </div>
      <div className='second'>
        <input type="range" min={5} max={50} value={length} onChange={(e) => setLength(Number(e.target.value))}/>
        <label>Length is: {length}</label>

        <input type="checkbox" defaultChecked={numberChange} onChange={(e) => setNumberChange(!numberChange)}></input>
        <label>Number</label>

        <input type="checkbox" defaultChecked={characterChange} onChange={(e) => setCharacterChange(!characterChange)}></input>
        <label>Character</label>
      </div>
    </>
  )
}

export default App