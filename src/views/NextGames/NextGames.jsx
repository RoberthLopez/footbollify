import React from 'react'
import GameList from '../../components/GameList/GameList'
import useGetMatchs from '../../hooks/useGetMatchs';

const API='/matchs';
const NextGames = () => {
  const games = useGetMatchs(API)
  
  let obj2 = {};
  for (let data of games) {
    // if empty, creates a array
    obj2[data.finished] = obj2[data.finished] || [];
    // add data in that array
    obj2[data.finished].push(data);
  }

  let obj = {};
  for (let data of obj2['FALSE']) {
    // if empty, creates a array
    obj[data.matchday] = obj[data.matchday] || [];
    // add data in that array
    obj[data.matchday].push(data);
  }

  return (
    <>
        {Object.values(obj).map((matchs, i)=>(
					<GameList matchs={matchs} key={i}/>
				))}
    </>
  )
}

export default NextGames