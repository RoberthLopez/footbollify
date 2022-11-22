import React, {useEffect, useState} from 'react'
import { Grupos } from '../../components/Grupos/Grupos'
import axios from 'axios'

const Groups = () => {
    const [apiData, setApiData] = useState(null)

    const loadGroups = async () => {
        try {
            const data = await axios({method: "GET", url:"/standings"})
            setApiData(data.data.data)
            
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
            return <Grupos key={e._id} group={e.group} teams={e.teams}/>
        })}
    </>
  )
}

export default Groups