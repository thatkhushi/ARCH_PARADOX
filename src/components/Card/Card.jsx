import React from 'react'
import planning from '../../images/planning.png'
import './Card.css'
const Card = () => {
  return (
   <div className='card__wrapper'>
     <div className='card__container'>
    <img src={planning} alt="planning"/>
    <h2>Design and Planning</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia culpa id</p>
     </div>
   </div>
  )
}

export default Card