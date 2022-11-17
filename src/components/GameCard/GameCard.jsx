import React from 'react'
import "./GameCard.css"

const GameCard = () => {
  return (
    <div className='gamecard__container'>
        <div className='gamecard__group'>        
            <span className='gamecard__group--name'>Grupo A</span>
            <span className='gamecard__group--time'>11:00 hs</span>
        </div>
        <div className='gamecard__teams'>
            <div className='gamecard__flag--container'>
                <img className='gamecard__flag' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png' alt='Bandera'/>
                <span className='gamecard__text'>Italia</span>
            </div>
            <div className='gamecard__text'>
                VS
            </div>
            <div className='gamecard__flag--container'>
                <img className='gamecard__flag' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png' alt='Bandera'/>
                <span className='gamecard__text'>Italia</span>
            </div>
        </div>

    </div>
  )
}

export default GameCard