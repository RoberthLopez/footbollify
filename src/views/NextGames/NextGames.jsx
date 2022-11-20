import React from 'react'
import GameList from '../../components/GameList/GameList'
import useGetGames from '../../hooks/useGetNextGames';

const API='/matchs/bymatchday';

const NextGames = () => {
  const games = useGetGames(API)
  return (
    <>
        {games.map((matchs, i)=>(
					<GameList matchs={matchs} key={i}/>
				))}
    </>
  )
}

export default NextGames