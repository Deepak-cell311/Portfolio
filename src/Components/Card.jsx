import React from 'react'



const Card = ({image, name, website, paragraph, readMore, className}) => {
     return (
          <>
               <article className='project-card'>
                    <img className={className} src={image} alt={name} />
                    <h1 align="center"><a href={website} target='_blank'>{name}</a></h1>
                    <p align="center">{paragraph} <a href={readMore} target='_blank'>read more</a></p>
               </article>
          </>
     )
}

export default Card
