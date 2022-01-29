import React, { useEffect, useState } from 'react';
import data1 from '../data1';

export const Increment = ()=> {   

  const [buttonDes, setButtonDes] = useState([...data1])  
   

  useEffect(() => {

    const descendente = [...buttonDes].sort((a,b)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
    setButtonDes(descendente)
    
  }, []);
  
   

  return (
    <div>          
        
        {/* <button onClick={()=>setValue(value + 1)} id="inc">Incrementa</button> */} 
        <button 
          onClick={()=>{
            let newDesendente = [...buttonDes].sort((a,b)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
            // if (newDesendente[0] === buttonDes[0])
            //   newDesendente = [...buttonDes].sort((b,a)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
            setButtonDes(newDesendente) 
            
            // let newDesendente = [...buttonDes].sort((a,b)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
            // if (newDesendente[0] === buttonDes[0])
            //   newDesendente = [...buttonDes].sort((b,a)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
            // setButtonDes(newDesendente)   
          } }
          >
          Incrementa
          </button>
          <button 
          onClick={()=>{
            let newDesendente = [...buttonDes].sort((b,a)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
            // if (newDesendente[0] === buttonDes[0])
            //   newDesendente = [...buttonDes].sort((b,a)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
            setButtonDes(newDesendente) 
            
            // let newDesendente = [...buttonDes].sort((a,b)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
            // if (newDesendente[0] === buttonDes[0])
            //   newDesendente = [...buttonDes].sort((b,a)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
            // setButtonDes(newDesendente)   
          } }
          >
          Decrementa
          </button>
          <ul>
            {
              buttonDes.map((el=> (
              <li>
                {el.votes}
              </li>
              )))              
            }
             
            </ul>   
                
    </div>
  )
} 


