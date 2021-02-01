import React, { useEffect } from 'react';
import Heading from './Headings';
import Keyboard from './Keyboard';
const Game=()=>{
   
    return(
        <div>
                    <Heading></Heading> 
                    <div class="Keyboard">
                    <Keyboard></Keyboard>
                    </div>
                    <button class="saveGame">Save Game</button>
        </div>
         
    )
}

export default Game;
