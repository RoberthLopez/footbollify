import React from 'react'
import "./Grupos.css"
export const Grupos = ({group, team}) => {
    console.log(team)
  return (
    <div className='group__container'>
        <h2>Grupo {group}</h2>
        <div className='group--header'>

            <div className='team__header--container'>
                <span className='span__header'>
                    Nombre de equipo
                </span>
            </div>
            <div className='data__header--container'>
                <span className='data__data span__header'>Pts</span>
                <span className='data__data span__header'>JJ</span>
                <span className='data__data span__header'>JG</span>
                <span className='data__data span__header'>JP</span>
                <span className='data__data span__header'>JE</span>
                <span className='data__data span__header'>GA</span>
                <span className='data__data span__header'>GC</span>
                <span className='data__data span__header'>DG</span>
            </div>         
        </div>
        {team && team.map((e)=>{
            return (
                <div className='info__container'>
                    <div key={team.id} className="team__container">
                        <img className="flags__img" src={e.flag} alt="bandera" />
                        <span className='team__name'>{e.name_en}</span>
                    </div>
                    <div className='data__container'>
                        <span className='data__data'>{e.pts}</span>
                        <span className='data__data'>{e.mp}</span>
                        <span className='data__data'>{e.w}</span>
                        <span className='data__data'>{e.l}</span>
                        <span className='data__data'>{e.d}</span>
                        <span className='data__data'>{e.gf}</span>
                        <span className='data__data'>{e.ga}</span>
                         <span className='data__data'>{e.gd}</span>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
