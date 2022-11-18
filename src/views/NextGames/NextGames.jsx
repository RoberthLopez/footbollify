import React from 'react'
import GameList from '../../components/GameList/GameList'
import useGetGames from '../../hooks/useGetNextGames';

const API='/matchs/bymatchday';

const NextGames = () => {
  const games = useGetGames(API)
  console.log(games)
  //const dayone = games.data.filter(({matchday}) => matchday === '1');
  //console.log(dayone)
  //const { data } = games
  //console.log(dayone)
  return (
    <>
        {games.map(matchs=>(
					<GameList matchs={matchs} key={matchs.matchday} />
				))}
    </>
  )
}

export default NextGames