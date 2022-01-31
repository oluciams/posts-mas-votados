import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import { CardPost } from './CardPost';


export const Posts = ({orderArray, addVote, subtractVote}) => { 	    
	

   if(!orderArray) return <h3>Loading . . . </h3>

    return (                
        <Row>  
            {                
							orderArray.map(({ id, title, description, votes, writer_avatar_url, post_image_url, url}) =>  
							<CardPost
							                 
								cardTitle={title}
								cardDescription={description}
								cardWriter={writer_avatar_url}
								cardVotes={votes}
								cardImage={post_image_url}
								cardUrl={url}
								id={id}
								addVote={addVote}
								subtractVote={subtractVote}
								/>                              
							)
            }        
         </Row>  
    )
}
