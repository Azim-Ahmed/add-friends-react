import React from 'react';
import FakeData from '../../FakeData/Profile'
import Friends from '../Friends/Friends';
import { useState } from 'react';
import List from '../List/List';
import './Component.css'

const Component = () => {
    const friends = FakeData;
    const [friend, setFriend] = useState(friends)
    const [list, setList] = useState([])
const handleAddfriends = (friend)=>  {
    const newList = [...list, friend]
    setList(newList)
}



    return (
        <div className="component">
            <div className="Friends-component">
        
               <ul>
                   {
                       friend.map(friendss => <Friends key = {friendss.id.toString()} handleAddfriends = {handleAddfriends} friend = {friendss}> this</Friends>)
                   }
               </ul>
               
                
            </div>

            <div className = "listBox">
              

                <List  friend = {list} newList = {list}></List>
            </div>
        </div>
    );
};

export default Component;