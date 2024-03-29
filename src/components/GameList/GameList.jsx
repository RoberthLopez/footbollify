import React from 'react'
import "./GameList.css"
import { Link } from 'react-router-dom'
import GameCard from '../GameCard/GameCard'

const GameList = ({matchs}) => {
  const str = matchs[0].local_date
  const date = new Date(str);
  return (
    
      <div className='gamelist__container'>
          <h2 className='gamelist__date'>Fase de Grupos - {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</h2>
          <div className='gamelist__container2'>
            {matchs.map((match, i)=>(
              <Link 
                    key={`${matchs[i].matchday}${matchs[i].id}`} 
                    className='gamelist__link' 
                    to={`/proximosjuegos/${matchs[i].matchday}/${matchs[i].id}`}>
                <GameCard matchs={match} />
              </Link>
            ))}
          </div>
      </div>
    
  )
}

export default GameList