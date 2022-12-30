import React from "react";
import { filterList } from "../ToDoFuncts";
import { Count } from "./Count";

const DesktopFilters=({toDo, setStatus, clearFunct})=>{
if(toDo.length===0){
    return
}
else{
    return(
        <div className="deskToggle flex">
        <Count toDo={toDo}/>
        <span className="filterBtn"
        onClick={ (e)=>{filterList(e, setStatus)}}
        >All</span>
        <span className="filterBtn"
        onClick={ (e)=>{filterList(e, setStatus)}}
        >
        Active</span>
        <span className="filterBtn"
        onClick={ (e)=>{filterList(e, setStatus)}}>
        Completed
        </span>
        <span className="clearBtn"
        onClick={clearFunct}
        >Clear Completed</span>
        </div>
    )
}

}

export default DesktopFilters