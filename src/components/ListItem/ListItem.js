import React from "react";
import "./ListItem.css";


const ListItem = ({item}) => {
 const dataStyle = item.important ? 'grey': ' blue';
 const textDecor = item.isDone ? 'line-through'  : '';
 


    return (
        <li style={{color: dataStyle, 'textDecoration': textDecor, }} >
        <span >   
         <i className="fa fa-trash text-white "></i></span> 
         Meet my friends
         </li>
    );
};
export  default ListItem;


