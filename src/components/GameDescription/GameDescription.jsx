import React from 'react'
import './GameDescription.css'
import HowToVoteIcon from '@mui/icons-material/HowToVote';

const GameDescription = () => {
  return (
    <div className='gamedescription__container'>
        <div className='gamedescription__container--1'>
            <div className='gamedescription__header'>
                <p className='gamedescription__date'>Lunes, 21/11, 11:00</p>
                <p className='gamedescription__date'>Estadio Al Khor</p>
            </div>
            <div className='gamedescription__container--detail'>
                <div className='gamedescription__flags--container'>
                    <img className="gamedescription__flags" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png' alt='bandera'/>
                    <span className='gamedescription__team--name'>Italia</span>
                </div>
                <div className='group__detail'>
                    <span>VS</span>
                    <span>Fase de grupos - Grupo A</span>
                </div>
                <div className='gamedescription__flags--container'>
                    <img className="gamedescription__flags" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png' alt='bandera'/>
                    <span className='gamedescription__team--name'>Alemania</span>
                </div>
            </div>
            <div className='gamedescription__probability'>
                <p className='gamedescription__title'>Probabilidad de Victoria</p>
                <div className='gamedescription__probability--container'>
                    <div className='gamedescription__names--container'>
                        <div className='gamedescription__names'>
                            <div className='gamedescription__team--name'>
                                Italia
                            </div>
                            <div>
                                70%
                            </div>
                        </div>
                        <div className='gamedescription__names'>
                            <div className='gamedescription__team--name'>
                                Alemania
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