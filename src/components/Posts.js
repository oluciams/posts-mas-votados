import React from 'react'
import { Row } from 'react-bootstrap';
import { CardPost } from './CardPost';
import data from '../data'


export const Posts = () => { 

    data.sort((a,b)=> {return a.votes-b.votes})
    

   if(!data) return <h3>Loading . . . </h3>

    return (                
        <Row>  
            {                
                data.map(({ id, title, description, votes, writer_avatar_url, post_image_url, url}) =>  
                <CardPost
                 key={id}                  
                 cardTitle={title}
                 cardDescription={description}
                 cardWriter={writer_avatar_url}
                 cardVotes={votes}
                 cardImage={post_image_url}
                 cardUrl={url}
                 />                              
                )
            }               
            {/* {data.map(({votes})=> <ul>
                <li>{votes}</li>
                </ul>)
            } */}
            
         </Row>  
    )
}
