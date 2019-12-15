import React from "react";
import ListItem from "./../../components/ListItem/ListItem";
import './../List/List.css'




const List = ({listData}) =>{ 
  /*    let x ='';
    for (const data of listData){
        console.log(data);      sxal tarberak
        < LiItem  items={data}/>

    }*/

    const ListitemData = listData.map((d) => {
        return <ListItem  item={d} key ={d.id}/>
    }

    )

    return (
        <div className="Listblok">
            <h3 className="text-white text-center">Lists</h3>
            <ul>
             { ListitemData}

            </ul>
        </div>
    );
};

export default List;