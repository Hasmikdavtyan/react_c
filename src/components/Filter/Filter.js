import React from "react";

import "./Filter.css";
const Filter = () =>{
    return (
        <React.Fragment>
          <div className="AddBlok">   

           <input type="text" className=" " placeholder="Add New"></input>
            <button className = "btn btn-secondary  text-white">Add</button>
            <hr/>
            </div>
            
        </React.Fragment>
    );
};

export default Filter;