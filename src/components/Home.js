import React, { useEffect, useState } from 'react';
import { Posts } from './Posts';
import data from '../data'


export const Home = () => {

  const [orderArray, setOrderArray] = useState([...data]);
  const [buttonToggle, setbuttonToggle] = useState(true);  

   

	const addVote = (id) => {

    let copyOrderArray = [...orderArray]
    let newCopyOrderArray = copyOrderArray.map((post)=>{
      if(post.id===id){
        post.votes += 1           
      }
      return post      
    }) 

    setOrderArray(newCopyOrderArray)
	}

	const subtractVote = (id) => {
    let copyOrderArray = [...orderArray]
    let newCopyOrderArray = copyOrderArray.map((post)=>{
      if(post.id===id){
        post.votes -= 1           
      }
      return post      
    }) 

    setOrderArray(newCopyOrderArray)		
   
	}


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

          <button type="button" className={`btn btn-outline-primary ms-2 ${buttonToggle ? "active" : ""}`}
            onClick={()=>{
              let newOrderAsc= [...orderArray].sort((a,b)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
              setOrderArray(newOrderAsc)              
              }
            }
          >Ascendente
          </button>

          <button type="button" className={`btn btn-outline-primary ms-2 ${buttonToggle ? "" : "active"}`} 
            onClick={()=>{
              let newOrderDes= [...orderArray].sort((b,a)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
              setOrderArray(newOrderDes)
              setbuttonToggle(false)
              }
            }
            >Desendente
          </button> 
                   
        </div>
       </div>      
    </section>

    <section>
      <Posts orderArray={orderArray}
             addVote={addVote}
             subtractVote={subtractVote}             
             />
    </section>

  </div>                                    
    
  )
}

