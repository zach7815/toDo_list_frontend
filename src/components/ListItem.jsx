import React, { useState } from "react";
import { UseFetch } from "./useFetch";


const ListItem = ({itemText, toDo, checked,
    toDos, setToDo, id, darkMode

}) =>{
    const defaultChecked=checked?checked:false;
    const [isChecked, setIsChecked]=useState(defaultChecked);

    const handleDelete =(e)=>{
        e.preventDefault()

       setToDo(toDos.filter(el=>el.id!==toDo.id))

        UseFetch("/api/deleteOne", "DELETE", toDo)
    }

    const toggleComplete= ()=>{
      setToDo(toDos.map(item=>{
        if(item.id===toDo.id){
            return{
                ...item,
                complete:!item.complete,
            }
        }
        return item

      }))

      UseFetch("/api/completeOne", "PUT", toDo)
    }

    return(
        <div className={`item flex ${darkMode===true?'darkmodeContent darkBorder':'lightmodeContent lightBorder'}` } id={id} >
        <label className="checkbox">
        <input
        className="checkbox-round"
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        onClick={toggleComplete}

         />
        <p className="itemContent">{itemText}</p>
        </label>
        <a href="null"
        className="crossContainer"
        onClick={handleDelete}
        >
        <svg className="cross"
        xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path  fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
        </a>
        </div>
    )
}
export default ListItem