import { useEffect,useState } from "react";
import axios from 'axios';

const useGetVotes = (API) => {
    const [votes, setVotes]=useState([]);
    async function fetchData() {
        const response = await axios.get(API); //request
        setVotes(response.data);
    }
	useEffect(() => {
        fetchData();
    }, []);
  return votes;
}

export default useGetVotes