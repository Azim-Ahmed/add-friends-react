import React from 'react';
import './List.css'

const List = (props) => {
    const list= props.newList;
   // console.log(props.friend.salary);
    //const Salary = list.reduce((total, fd)=> total + fd.salary ,0)
let total = 0
for (let i = 0; i < list.length; i++) {
    const salaries = list[i];
    total = total + parseInt(salaries.salary);
}

    return (
        <div className ="listArea">
        <h4>Added Friends : {list.length}</h4> 
        <ul>
      {
          list.map(fd=> <li>{fd.name}'s Salary :$ {fd.salary}</li>)
      }

       </ul>   
    <h3>Salary: $ {total}</h3>
        </div>
    );
};

export default List;