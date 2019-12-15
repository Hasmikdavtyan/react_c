import React from "react";
import Filter from "../Filter/Filter";
import List from "../List/List";
import './App.css'

const dataArr = [
    {
        id:1,
        title:'To do List',
        isDone: false ,
        important: true,

    },

    {
        id:2,
        title:'To do List 2',
        isDone: true,
        important: true,

    },

    {
        id:3,
        title:'grel',
        isDone: false ,
        important: true,

    },
    {
        id:4,
        title:'kardal',
        isDone: false ,
        important: true,

    },

    {
        id:5,
        title:'kardal',
        isDone: true ,
        important: false,

    }
]


const App = () => {
    return (
        <main>
              <div className="AppStyle">
            <h1 className="text-white">ToDo List</h1>
            <Filter/>
            <List listData={dataArr}/>
            
        </div>
        </main>

        
    );
};

export default App