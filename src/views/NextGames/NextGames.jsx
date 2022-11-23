import React, { useEffect, useState } from 'react'
import GameList from '../../components/GameList/GameList'
import useGetMatchs from '../../hooks/useGetMatchs';

const API='/matchs';
const NextGames = () => {
  
  const games = useGetMatchs(API)
  //console.log(games.filter(game => game.finished==='FALSE'))
  const arr = games.filter(game => game.finished==='FALSE')
  //console.log(arr)

  const groupByMatchday = arr.reduce((group, match) => {
    const { matchday } = match;
    group[matchday] = group[matchday] ?? [];
    group[matchday].push(match);
    return group;
  }, {});
  //console.log(Object.values(groupByMatchday))

  return (
    <> 
      {Object.values(groupByMatchday).length>0 && <>
      
        {Object.values(groupByMatchday)
        .map(
          (matchs, i)=>(
              <GameList matchs={matchs} key={i}/>
            )
          )
        }

      </>}
        
    </>
  )
}

export default NextGames