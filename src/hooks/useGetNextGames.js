import { useEffect,useState } from "react";
import axios from 'axios';

const useGetGames = (API) => {
    const [games, setGames]=useState([]);
    const fetchData = async() => {
        try {
            const response = await axios.get(API); //request
            setGames(response.data);                
        } catch (error) {
            console.error(error)
        }
    }
	useEffect(() => {
        fetchData();
    }, []);
  return games;
}

export default useGetGames