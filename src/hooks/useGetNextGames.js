import { useEffect,useState } from "react";
import axios from 'axios';

const useGetGames = (API) => {
    const [games, setGames]=useState([]);
	useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(API); //request
                setGames(response.data);                
            } catch (error) {
                console.error(error)
            }

        }
        fetchData();
    }, []);
  return games;
}

export default useGetGames