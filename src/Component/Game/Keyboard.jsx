import React, { useState } from 'react';

const Keyboard=()=>{
    var { alphabate, Setalphabet}= useState('');
    var {word, SetWord}= useState(' ');   
    var{guess, Setguess}=useState([]);
    var{wrong,SetWrong}=useState(0);
    
    SetWord=(e)=>{
        
        console.log("onclick")
        const AllWord = [
            ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
            ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
            ["manchester", "milan", "madrid", "amsterdam", "prague"]
        ];
      var chosenword = AllWord[Math.floor(Math.random() * AllWord.length)];
      word = chosenword[Math.floor(Math.random() * chosenword.length)];
      console.log(word);
    }

     Setalphabet=(e)=>{
         e.preventDefault();
         var Alphabate=e.target.value;
        alphabate=Alphabate.toLowerCase()
        console.log("alphabate"+alphabate);
        Setguess(e)
        return
    }
    Setguess=(e)=>{
      e.preventDefault()
      guess=alphabate;

      return guess
     }

    const prepareAlphabets = () => {
        let result = [];
        for(let i=65; i<91; i++) {
          result.push(
            <button type="button" class="keyboardButton" onClick={(event)=>Setalphabet(event)} key={i} value={String.fromCharCode(i)} >{String.fromCharCode(i)}</button>
            )
        }
        return result;
      }
  

    return(<>
    <div>      
            <button id="reset" onClick={(e)=>SetWord(e)}><i class="material-icons">&#xe5d5;</i>Start Game </button>
            
        </div>
        <p>{guess}</p>
        <div> 
          {prepareAlphabets()}
        </div>
        
    </>
    )
}
export default Keyboard;