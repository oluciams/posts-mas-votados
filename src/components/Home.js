import React, { useEffect, useState } from 'react';
import { Increment } from './Increment';
import { Posts } from './Posts';
import data from '../data'


export const Home = () => {

  const [orderArray, setOrderArray] = useState([...data]);

	useEffect(() => {

		const organizeAsc = [...orderArray].sort((a,b)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
		setOrderArray(organizeAsc)		
	}, []);
    
   
return (    
  
  <div className="container">
    
    <div className="row">
      <div className="col ">
        <h2>Blog posts populares</h2>        
      </div>
    </div>  

    <section className="mt-4 mb-3">
      <div className="row">
        <div className="col">
          <p className="d-inline-block">Orden:</p>

          <button type="button" className="btn btn-outline-primary ms-2" 
            onClick={()=>{
              let newOrderAsc= [...orderArray].sort((a,b)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
              setOrderArray(newOrderAsc)}
            }
          >Ascendente
          </button>

          <button type="button" className="btn btn-outline-primary ms-2" 
            onClick={()=>{
              let newOrderDes= [...orderArray].sort((b,a)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
              setOrderArray(newOrderDes)}
            }
            >Desendente
          </button> 
                   
        </div>
      </div>
      <Increment/>
    </section>

    <section>
      <Posts/>
    </section>

  </div>                                    
    
  )
}

