import React from 'react'
import "./GameList.css"
import GameCard from '../GameCard/GameCard'

const GameList = (games) => {
  const matchs = games.matchs
  //console.log(matchs)
  return (
    <div className='gamelist__container'>
        <h2 className='gamelist__date'>Fase de Grupos - {matchs[0].local_date}</h2>
        <div className='gamelist__container2'>
          {matchs.map(match=>(
            <GameCard matchs={match} key={match.id} />
          ))}
        </div>
    </div>
  )
}

export default GameList