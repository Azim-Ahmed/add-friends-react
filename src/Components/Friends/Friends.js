import React from 'react';
import './Friends.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'


const Friends = (props) => {
     const {name, salary, email, gender,photo} = props.friend;

    //  console.log(props.friend.first);

    return (
        <div className="friendsCom">
            <div className=" photo">
                <img src={photo} alt="" />
            </div>
            <div className="introduction"> 
                 <h3>Name : {name}</h3>
                 <p>gender: {gender}</p>
                 <p>email: {email}</p>
                <p>your Salary : ${salary}</p>
                <button onClick ={() => props.handleAddfriends(props.friend)} className="addButton"> <FontAwesomeIcon icon={ faUserFriends } />  Add Friend</button>
            </div>
            

        </div>
    );
};

export default Friends;