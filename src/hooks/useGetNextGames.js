import { useEffect,useState } from "react";
import axios from 'axios';

const useGetGames = (API) => {
    const [games, setGames]=useState([]);
	useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API); //request
            setGames(response.data);
        }
        fetchData();
    }, []);
  return games;
}

export default useGetGames