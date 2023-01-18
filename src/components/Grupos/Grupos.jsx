import React from 'react';
import TeamInfo from '../TeamInfo/TeamInfo';
import "./Grupos.css";
export const Grupos = ({group, teams}) => {
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
        {teams && teams.map((team)=>{
            return (
                <TeamInfo key={team.team_id} team={team} />
            )
        })}
    </div>
  )
}
