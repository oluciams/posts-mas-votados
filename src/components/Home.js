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
     buttonToggle ? orderUpward() : orderFalling()
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
    buttonToggle ? orderUpward() : orderFalling()
  }

  const orderUpward = ()=>{
    let newOrderAsc= [...orderArray].sort((a,b)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
      setOrderArray(newOrderAsc)
      setbuttonToggle(true) 
  }

  const orderFalling = ()=>{
    let newOrderDes= [...orderArray].sort((b,a)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
      setOrderArray(newOrderDes)
      setbuttonToggle(false)    

  }
  
  useEffect(() => {
		const organizeAsc = [...orderArray].sort((a,b)=> (a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0))
		  setOrderArray(organizeAsc)		
	},  []);  
   
  return (    
    
    <div className="container">

      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 mb-4">
            <h2>Blog posts populares.</h2>        
          </div>
        </div> 
      </section> 

      <section>
        <div className="row mt-4 mb-3 justify-content-center">
          <div className="col-md-8">
            <p className="d-inline-block">Orden:</p>

            <button type="button" className={`btn btn-outline-primary ms-2 ${buttonToggle ? "active" : ""}`}
              onClick={()=> orderUpward()}
              >Ascendente
            </button>

            <button type="button" className={`btn btn-outline-primary ms-2 ${buttonToggle ? "" : "active"}`} 
              onClick={()=> orderFalling()}
              >Desendente
            </button>                    
          </div>
        </div>      
      </section>

      <section>
        <Posts 
          orderArray={orderArray}
          addVote={addVote}
          subtractVote={subtractVote}/>
      </section>

    </div>   
  )
}

