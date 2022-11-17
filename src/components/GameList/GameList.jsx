import React from 'react'
import "./GameList.css"
import GameCard from '../GameCard/GameCard'
import { Link } from '@mui/icons-material'

const GameList = () => {
  return (
    <div className='gamelist__container'>
        <h2 className='gamelist__date'>Fase de Grupos - Dom, 20/11</h2>
        <div className='gamelist__container2'>
            <GameCard />
            <GameCard />
            <GameCard />
        </div>
    </div>
  )
}

export default GameList