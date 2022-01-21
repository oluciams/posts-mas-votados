import React from 'react';
import { Card, Button } from 'react-bootstrap';


export const CardPost = ({         
  
  cardTitle,
  cardDescription,
  cardWriter,
  cardVotes,
  cardImage

  })=> {

  return (

    <Card style={{ width: '540px'}}>
      <Card.Img variant="top" src={cardImage} style={{ width: '12rem' }}/>
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardDescription}</Card.Text>
        <Card.Text>{cardVotes}</Card.Text>
        <Card.Img variant="bottom" src={cardWriter} style={{ width: '5rem' }}/>    
        <Button variant="primary">divide</Button>
      </Card.Body>
    </Card>

    // <div className="card mx-auto my-3" style={{ width: '18rem'}}>
    //   <div className="row g-0">
    //     <div className="col-md-3">
    //       <img src={cardImage} className=" card-img img-fluid rounded-start" alt="imagen-post" style={{ width: '12rem'}}></img>
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         <h5 className="card-title">{cardTitle}</h5>
    //         <p className="card-text">{cardDescription}</p>
    //          <p className="card-text">{cardVotes}</p>
    //          <img src={cardWriter} className="img-fluid rounded-start" alt="imege-writer" style={{ width: '6 rem'}}></img>            
    //       </div>
    //     </div>
    //   </div>
    // </div>       

  )
} 
