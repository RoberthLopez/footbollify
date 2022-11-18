import React from 'react'
import "./GameList.css"
import { Link } from 'react-router-dom'
import GameCard from '../GameCard/GameCard'

const GameList = ({matchs, day}) => {

  return (
    
      <div className='gamelist__container'>
          <h2 className='gamelist__date'>Fase de Grupos - {matchs[0].local_date}</h2>
          <div className='gamelist__container2'>
            {matchs.map((match, i)=>(
              <Link key={`${day}${i}`} className='gamelist__link' to={`/proximosjuegos/${day}/${i}`}>
                <GameCard matchs={match} />
              </Link>
            ))}
          </div>
      </div>
    
  )
}

export default GameList