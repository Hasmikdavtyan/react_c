import React from "react";
import ReactDOM from "react-dom";
import Filter from "./components/Filter/Filter";
import List from "./components/List/List";

import "./index.css";




const App = () => {
    return (
        <main>
             
       
        
        <div className="AppStyle">
            <h1 className="text-white">ToDo List</h1>
            <Filter/>
            <List/>
            
        </div>
        </main>

        
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);