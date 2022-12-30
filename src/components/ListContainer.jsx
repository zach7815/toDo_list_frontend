import React from "react";
import ListItem from "./ListItem";
import ItemCount from './ItemCount';
import DesktopFilters from "./DesktopFilters";



const ListContainer = ({toDo,setToDo, setStatus,
    filteredTodos, darkMode,
   clearFunct})=>{
    return(
        <div className={`listContent ${darkMode===true?'darkmodeContent':'lightmodeContent'}`}>

        {filteredTodos.map(item=>{
            return(
                <ListItem
                key={item.id}
                id={item.id}
                itemText={item.text}
                checked={item.complete}
                toDo={item}
                toDos={toDo}
               setToDo={setToDo}
               darkMode={darkMode}
                />
            )
        })
        }
        <ItemCount
         toDo={toDo}

         filteredTodos={filteredTodos}
         clearFunct={clearFunct}

        />

        <DesktopFilters
        toDo={toDo}
         filteredTodos={filteredTodos}
         setStatus={setStatus}
         clearFunct={clearFunct}
         />

        </div>
    )
}

export default ListContainer