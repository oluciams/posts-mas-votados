import React, { useState } from 'react';



export const Increment = ()=> {

  const [value, setValue] = useState(0)

  return (

    <div>
        <span className="value">{value}</span>
        <button onClick={()=>setValue(value + 1)} id="inc"><i type= "btn" class="bi bi-caret-up"></i>Incrementa<i class="bi bi-caret-down"></i></button>
      </div>
  )

} 


