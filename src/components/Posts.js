import React from 'react'
import { Row } from 'react-bootstrap';
import { CardPost } from './CardPost';
import data from '../data'


export const Posts = () => {

  
    

   if(!data) return <h3>Loading . . . </h3>

    return (                
        <Row>  
            {                
                data.map(({ id, title, description, votes, writer_avatar_url, post_image_url}) =>  
                <CardPost
                 key={id}                  
                 cardTitle={title}
                 cardDescription={description}
                 cardWriter={writer_avatar_url}
                 cardVotes={votes}
                 cardImage={post_image_url}
                 />                              
                )
            }               
         </Row>  
    )
}
