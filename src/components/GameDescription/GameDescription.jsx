import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import './GameDescription.css'

const GameDescription = () => {

    const {gameDay, gameMatch} = useParams();
    const [dayGame, setDayGame] = useState({})

    const getDayGame = async () => {
        try {
            const data = await axios({method: "GET", url:'/match/'+gameMatch});
            let {local_date, home_flag, home_team_en, home_team_id, away_flag, away_team_en, away_team_id, group}=data.data.data[0]
            setDayGame(
                {
                    local_date,
                    home_flag,
                    home_team_en,
                    home_team_id,
                    away_flag,
                    away_team_en,
                    away_team_id,
                    group,
                }
            )
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
      getDayGame()

    }, [])
    
  return (
    <div className='gamedescription__container'>
        <div className='gamedescription__container--1'>
            <div className='gamedescription__header'>
                <p className='gamedescription__date'>{dayGame && dayGame.local_date}</p>
                <p className='gamedescription__date'>Estadio Al Khor</p>
            </div>
            <div className='gamedescription__container--detail'>
                <div className='gamedescription__flags--container'>
                    <img className="gamedescription__flags" src={dayGame.home_flag} alt='bandera {dayGame.home_team_en}'/>
                    <span className='gamedescription__team--name'>{dayGame.home_team_en}</span>
                </div>
                <div className='group__detail'>
                    <span>VS</span>
                    <span>Fase de grupos - Grupo {dayGame.group}</span>
                </div>
                <div className='gamedescription__flags--container'>
                    <img className="gamedescription__flags" src={dayGame.away_flag} alt='bandera'/>
                    <span className='gamedescription__team--name'>{dayGame.away_team_en}</span>
                </div>
            </div>
            <div className='gamedescription__probability'>
                <p className='gamedescription__title'>Probabilidad de Victoria</p>
                <div className='gamedescription__probability--container'>
                    <div className='gamedescription__names--container'>
                        <div className='gamedescription__names'>
                            <div className='gamedescription__team--name'>
                            {dayGame.home_team_en}
                            </div>
                            <div>
                                70%
                            </div>
                        </div>
                        <div className='gamedescription__names'>
                            <div className='gamedescription__team--name'>
                            {dayGame.away_team_en}
                            </div>
                            <div>
                                30%
                            </div>
                        </div>
                    </div>
                    <div className='background__bar'>
                        <div className='front__bar'/>
                    </div>
                    <div className='vote__container'>
                        <div className='vote__container--inner'>
                            <HowToVoteIcon fontSize="large" className='vote__icon'/>
                        </div>
                        <div className='vote__container--inner'>
                            <HowToVoteIcon fontSize="large" className='md-48'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GameDescription