import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FriendsList = () =>{

    const [friends, setFriends] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem("token")
        axios.get("http://localhost:9000/api/friends", {
            headers: {
                authenticator: token
            }
        })
        .then(res =>{
          setFriends(res.data)
              })

        .catch(err => {console.log(err)})
    }, [])

    
    return (
        <div>
            <h1>FRIENDS LIST</h1>
            <ul>
            {friends.map(friend =>{
                <li>{friend.name}-{friend.age}-{friend.email}</li>
            })}
           
            </ul>
            
        </div>
    )
}

export default FriendsList;