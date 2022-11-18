import React from 'react'
import GameList from '../../components/GameList/GameList'
import useGetGames from '../../hooks/useGetNextGames';

const API='/matchs';

const NextGames = () => {
  const games = useGetGames(API)
  console.log(games)
  return (
    <>
        <GameList games={games}/>
    </>
  )
}

export default NextGames