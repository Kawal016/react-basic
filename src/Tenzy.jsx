import { useState } from 'react';
import Dice from './components/dice';
import Confetti from 'react-confetti';
export default function Tenzy(){
    const [dice,setDice]=useState(()=>generateNewDice());
    
    function generateNewDice(){
        // const arrayNumber=[];
        // for(let i=0; i<10; i++){
        // const number=Math.ceil(Math.random() * 6);
        // arrayNumber.push(number)    
        let i=1;
        //new way
        return new Array(10)
                   .fill(0)
                   .map(()=>({
                    value:Math.ceil(Math.random()*6),
                    isHeld:false,
                    id:i++        
                   }))             
    }
     function buttonClick(id){
        
         setDice(oldDice=>
            oldDice.map(dice=>dice.id === id ? {...dice,isHeld:!dice.isHeld} : dice
         ));
         
     }
    function handleRoll(){
         if(!gameWon){
           setDice(oldDice => 
            oldDice.map(dice=>dice.isHeld ? dice : {...dice,value:Math.ceil(Math.random()*6)})
        );
        }else{
            setDice(generateNewDice())
        }
    }
  const gameWon=dice.every(val=>val.isHeld) && dice.every(val=>val.value === dice[0].value);
     
    const diceElement = dice.map(diceObj=> <Dice key={diceObj.id} id={diceObj.id} held={diceObj.isHeld} value={diceObj.value}  hold={buttonClick}/>);
   
    return(
        <main>
            {gameWon && <Confetti />}
             <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="diceConatoner">
              {
                diceElement
              }
            </div>
            <button onClick={handleRoll} className='rollButton'>
               {gameWon ? 'New Game' : 'Roll' } 
            </button>
            {
                gameWon ? <h1>Congraluation you won the game</h1> : null
            }
        </main>
    )
}