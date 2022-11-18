import React from 'react'
import GameList from '../../components/GameList/GameList'
import useGetGames from '../../hooks/useGetNextGames';

const API='/matchs/bymatchday';

const NextGames = () => {
  const games = useGetGames(API)
  //console.log(games)
  return (
    <>
        {games.map(matchs=>(
					<GameList matchs={matchs} key={matchs.matchday} />
				))}
    </>
  )
}

export default NextGames