import React from "react";
import LiItem from "./../../components/ListItem/LiItem1";
import LiItem2 from "./../../components/ListItem/LiItems2";
import LiItem3 from "./../../components/ListItem/LiItem3";
import './../List/List.css'




const List = () =>{
    return (
        <div className="Listblok">
            <h3 className="text-white text-center">Lists</h3>
            <ul>
                < LiItem />
                <LiItem2 />
                <LiItem3 />

            </ul>
        </div>
    );
};

export default List;