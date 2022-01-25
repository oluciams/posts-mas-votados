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

    <section className="mt-4 mb-3">
      <div className="row">
        <div className="col">
          <p className="d-inline-block">Orden:</p>
          <button type="button" className="btn btn-outline-primary ms-2">Ascendente</button>
          <button type="button" className="btn btn-primary ms-2">Desendente</button>           
        </div>
      </div>
    </section>

    <section>
      <Posts/>
    </section>

  </div>                                    
    
  )
}

