import React, {useEffect} from 'react'
import GameList from '../../components/GameList/GameList'
import useGetMatchs from '../../hooks/useGetMatchs';

const API='/matchs';
const NextGames = () => {
  const games = useGetMatchs(API)
  
  let obj = {};
  for (let data of games) {
    // if empty, creates a array
    obj[data.matchday] = obj[data.matchday] || [];
    // add data in that array
    obj[data.matchday].push(data);
  }

  useEffect(() => {
    console.log(Object.values(obj))
  }, [])

  return (
    <>
        {Object.values(obj).map((matchs, i)=>(
					<GameList matchs={matchs} key={i}/>
				))}
    </>
  )
}

export default NextGames