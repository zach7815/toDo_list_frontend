import React from "react";
import { filterList } from "../ToDoFuncts";

const ToggleState=({setStatus, darkMode})=>{







    return (
        <div className={`Toggles ${darkMode===true?'darkmodeContent ':'lightmodeContent'}` }>
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
        </div>
    )
}

export default ToggleState;