import React from 'react';


export const CardPost = ({         
 
  cardTitle,
  cardDescription,
  cardWriter,
  cardVotes,
  cardImage,
  cardUrl,
  id,
  addVote,
  subtractVote
  })=> {
    
  return (
    
    <div className="row" key={id}>
      <div className="col d-flex flex-row justify-content-center">        
        <div className="col-md-3">
          <img src={cardImage} className="img-fluid rounded-start" alt="imagen-post" style= {{width:'100%', height:'60%'}}></img>
        </div>

        <div className="col-md-2 text-center">          
        <button className="btn" id="add" onClick={()=>addVote(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill text-primary" viewBox="0 0 16 16">
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
        </svg>
        </button>
        <p><span className="value"></span></p> 
        <p>{cardVotes}</p>                 
        <button className="btn" id="subtract" onClick={()=>subtractVote(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill text-primary" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
        </button>
        </div>
        <div className="col-md-5">
          <a href={cardUrl} target="_blank" rel="noreferrer" className="text-decoration-none mb-2">{cardTitle}</a>          
          <p className="mt-2">{cardDescription}</p>                
          <p><small className="text-secondary">Escrito por: <img src={cardWriter} className="img-fluid rounded-circle" alt="imege-writer" style={{ width: '2rem' }}></img></small></p>
        </div>
      </div>
    </div>   
  )
} 
