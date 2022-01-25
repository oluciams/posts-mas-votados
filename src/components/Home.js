import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Posts } from './Posts';


export const Home = () => {
   
return (    
  
  <div className="container">
    
    <div className="row">
      <div className="col">
        <h1 className='text-center '>Blog posts populares</h1>
      </div>
    </div>  

    <section>
      <div className="row">
        <div className="col d-flex flex-row">
          <p>Orden:</p>
          <button type="button" className="btn btn-outline-primary">Ascendente</button>
          <button type="button" className="btn btn-primary">Desendente</button>           
        </div>
      </div>
    </section>

    <section>
      <Posts/>
    </section>

  </div>                                    
    
  )
}

