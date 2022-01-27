import React, { useState } from 'react';
import data from '../data';

export const Increment = ()=> {

  
  const [value, setValue] = useState(0)

  const data1 = [
    {
      id: 1,
      title: 'Manejo de dependencias en Ruby con Bundler',      
      votes: 52      
    },
    {
      id: 2,
      title: 'Descubre si Make it Real es para ti',      
      votes: 43      
    },
    {
      id: 3,
      title: '¿Qué es código?',      
      votes: 144      
    },
    {
      id: 4,
      title: 'Aprende Desarrollo Web gratis',      
      votes: 245      
    },
    {
      id: 5,
      title: 'Desarrollo Web gratis',      
      votes: 1      
    }
  ]
  
    data1.sort((a,b)=> {return a.votes-b.votes})
    
  
  

  return (
    <div>  

        <span className="value">{value}</span>
        <button onClick={()=>setValue(value + 1)} id="inc"><i type= "btn" class="bi bi-caret-up"></i>Incrementa<i class="bi bi-caret-down"></i></button>
        <button onClick={()=>setValue(value - 1)} id="inc">Decrementa</button>
        <p> este es el arreglo con el metodo sort,</p>
      </div>
  )

} 


