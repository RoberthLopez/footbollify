import React from 'react'

function TeamInfo({team}) {
  return (
    <div className='info__container'>
        <div className="team__container">
            <img className="flags__img" src={team.flag} alt="bandera de {team.name_en}" />
            <span className='team__name'>{team.name_en}</span>
        </div>
        <div className='data__container'>
            <span className='data__data'>{team.pts}</span>
            <span className='data__data'>{team.mp}</span>
            <span className='data__data'>{team.w}</span>
            <span className='data__data'>{team.l}</span>
            <span className='data__data'>{team.d}</span>
            <span className='data__data'>{team.gf}</span>
            <span className='data__data'>{team.ga}</span>
            <span className='data__data'>{team.gd}</span>
        </div>
    </div>
  )
}

export default TeamInfo