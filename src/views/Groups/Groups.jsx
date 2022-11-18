import React, {useEffect, useState} from 'react'
import { Grupos } from '../../components/Grupos/Grupos'
import axios from 'axios'

const Groups = () => {
    const [apiData, setApiData] = useState(null)

    const loadGroups = async () => {
        try {
            const data = await axios({method: "GET", url:"/standings"})
            console.log(data.data.data)
            setApiData(data.data.data)
            console.log(apiData)
            
        } catch (error) {
            console.log(error)
        }
        

    }


    useEffect(() => {
        loadGroups()

    }, []);
    

  return (
    <>
        {apiData && apiData.map((e) => {
            return <Grupos key={e.id}group={e.group} team={e.teams}/>
        })}
    </>
  )
}

export default Groups