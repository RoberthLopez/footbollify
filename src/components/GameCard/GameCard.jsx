import React from 'react'
import "./GameCard.css"

const GameCard = (match) => {
    match=match.matchs
  return (
    <div className='gamecard__container'>
        <div className='gamecard__group'>        
            <span className='gamecard__group--name'>Grupo {match.group}</span>
            <span className='gamecard__group--time'>{match.local_date}</span>
        </div>
        <div className='gamecard__teams'>
            <div className='gamecard__flag--container'>
                <img className='gamecard__flag' src={match.home_flag} alt={match.home_team_en}/>
                <span className='gamecard__text'>{match.home_team_en}</span>
            </div>
            <div className='gamecard__text'>
                VS
            </div>
            <div className='gamecard__flag--container'>
                <img className='gamecard__flag' src={match.away_flag} alt={match.away_team_en}/>
                <span className='gamecard__text'>{match.away_team_en}</span>
            </div>
        </div>

    </div>
  )
}

export default GameCard