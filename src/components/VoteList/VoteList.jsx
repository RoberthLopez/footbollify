import React, {useState, useEffect} from 'react';
import axios from 'axios';
import VoteItem from '../VoteItem/VoteItem';


export default function VoteList(props) {
    const [votes, setVotes] = useState([])

    const getVotes = async () => {
        try {
            let email=localStorage.getItem('email')
            const data = await axios({
                method: "POST", 
                url:'/votes',
                data:{
                    email
                   }
            });
            console.log(data.data)
            if (data.data){
                localStorage.setItem('votes', data.data)
                setVotes(data.data)
            }
            else{
                if (localStorage.getItem('votes')){
                    setVotes(localStorage.getItem('votes'))
                }   
            }
            console.log(votes)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
      getVotes()
    }, [])


    if(votes !== null){
        console.log(votes)
        return (
            <div className='VoteList'>
                {votes && <>
                    
                        {votes.map((vote)=>(
                            <>
                                <VoteItem key={vote.id} vote={vote}/>
                            </>
                            
                        ))}
                    
                </>}
            </div>
            )
    }
  
}