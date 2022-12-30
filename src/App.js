import './App.scss';
import React, {useState,useEffect} from 'react';
import Header from './components/Header';
import Attribution from './components/Attribution';
import ListContainer from './components/ListContainer';
import ToggleState from './components/ToggleState';
import desktopLight from './images/bg-desktop-light.jpg'
import desktopDark from './images/bg-desktop-dark.jpg'
import { UseFetch } from './components/useFetch';



function App() {
  const [inputText, setInputText]=useState("");
  const [toDoList,setToDoList]= useState([]);
  const [darkMode, setDarkMode]=useState(false);
  const [status, setStatus]=useState("All")
  const [filteredTodos, setFilteredTodos]= useState([])
  const [background,setBackground]= useState(desktopLight);

  const bgImage = {
    backgroundImage:`url(${background})`
  };

  const clearCompleted= ()=>{
    setToDoList(toDoList.filter(item=> item.complete===false))
    UseFetch("https://todo-app-backend-a4kl.onrender.com/api/deleteComplete", "DELETE")
}

  useEffect(()=>{
    const filterHandler = ()=>{


      switch(status){

        case "Completed":
          setFilteredTodos(toDoList.filter(toDo=>toDo.complete===true))
          break


          case "Active":
            setFilteredTodos(toDoList.filter(toDo=>toDo.complete!==true))
            break

            case "Clear Completed":


                  break

          default:
            setFilteredTodos(toDoList)
          break
      }

    }
    filterHandler();
     }, [toDoList,status, setToDoList])


     useEffect(()=>{

        const getData= async ()=>{
          const response= await fetch("https://todo-app-backend-a4kl.onrender.com/api/loadtoDos");
          const result = await response.json();
          setToDoList(result)
        }
        getData()
     },[toDoList])

  return (
    <div className={`App ${darkMode===true?'darkModeBody':'lightmodeContent'}`}>
<Header
inputText={inputText}
setInputText={setInputText}
data={toDoList}
updateData={setToDoList}
darkMode={darkMode}
setDarkMode={setDarkMode}
background={background}
setBackground={setBackground}
bgImage={bgImage}
desktopLight={desktopLight}
desktopDark={desktopDark}
desk

/>
<ListContainer toDo={toDoList}
filteredTodos={filteredTodos}
 setToDo={setToDoList}
 setStatus={setStatus}
 darkMode={darkMode}
clearFunct={clearCompleted}
 />
<ToggleState   setStatus={setStatus} darkMode={darkMode}/>


<Attribution darkMode={darkMode}/>
    </div>
  );
}

export default App;
