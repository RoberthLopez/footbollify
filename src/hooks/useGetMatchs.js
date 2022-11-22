import { useEffect,useState } from "react";
import axios from 'axios';

const useGetMatchs = (API) => {
    const [matchs, setMatchs]=useState([]);
    const fetchData = async() => {
        try {
            const response = await axios.get(API); //request
            setMatchs(response.data.data);               
        } catch (error) {
            console.error(error)
        }
    }
	useEffect(() => {
        fetchData();
    }, []);
  return matchs;
}

export default useGetMatchs