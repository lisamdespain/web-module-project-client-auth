import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FriendsList = () =>{

    const [friends, setFriends] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem("token")
        axios.get("http://localhost:9000/api/friends", {
            headers: {
                authorization: token
            }
        })
        .then(res =>{
           setFriends(res.data);
              })

        .catch(err => {console.log(err)})
    }, []);

    
    return (
        <div>
            <h1>FRIENDS LIST</h1>
            
            {friends.map((friend, idx) =>{
                return <p className="friends-list" key={idx}>{friend.name} - {friend.age} - {friend.email}</p>
            })}
           
            
            
        </div>
    )
}

export default FriendsList;