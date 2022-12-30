import React from 'react';
import { UseFetch } from './useFetch';

const TaskInput= ({inputText, setInputText, newItem, setNewItem, darkMode})=>{

 const inputTextHandler = (e)=>{
    setInputText(e.target.value);
 }

const handleSubmit= (e)=>{

    const item =  {
        id:Math.random()*1000,
        text:inputText,
        complete:false
    }

    e.preventDefault()
    setNewItem([...newItem,item

    ])
    setInputText('')
    UseFetch("/api/addOne", "POST", item)
}


    return (
        <form   onSubmit={handleSubmit} className="inputWrap">
        {/* <label className="inputWrap"> write a task */}
        <input
         className={`itemInput ${darkMode===true?'darkmodeContent':'lightmodeContent'}`}
         value={inputText}
         onChange={inputTextHandler}
          type="text"
          placeholder="Create a new todo..."
          maxLength="50"
            label="write a "
          />
          {/* </label> */}
        </form>
    )
}

export default TaskInput;