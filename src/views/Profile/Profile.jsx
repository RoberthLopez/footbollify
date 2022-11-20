import { useState, useEffect } from 'react'
import axios from "axios";
import '../../App.css';
import VoteList from '../../components/VoteList/VoteList'

function Profile(props) {

   // new line start
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
      headers: {
        Authorization: 'Bearer ' + props.token
      }
    })
    .then((response) => {
      const res =response.data
      res.access_token && props.setToken(res.access_token)
      setProfileData(({
        profile_name: res.name,
        about_me: res.about,
        email: res.email
      }))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    //end of new line 

    useEffect(() => {
      getData()

    }, [])

    return (
        <div className="Profile">
            {profileData && <div>
                  <p>Profile name: {profileData.profile_name}</p>
                  <p>About me: {profileData.about_me}</p>
                  <p>Email: {profileData.email}</p>
                  
                </div>
            }
          <VoteList />
        </div>
      );
    }

export default Profile;
