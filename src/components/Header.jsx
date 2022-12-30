import React from 'react';
import {ReactComponent as ReactLogoMoon} from '../images/icon-moon.svg';
import {ReactComponent as ReactLogoSun} from '../images/icon-sun.svg';
import TaskInput from './TaskInput';




const Header = ({inputText, setInputText, data,
updateData, darkMode, setDarkMode, setBackground, bgImage, desktopLight, desktopDark})=>{

    const toggleDarkmode=(e)=>{
        e.preventDefault();
        if (darkMode===false){
            setDarkMode(true)
            setBackground(desktopDark)
        }
        else{
            setDarkMode(false)
            setBackground(desktopLight)
        }
    }

    return (
        <div className="header" style={bgImage}>
        <div className='heading'>
        <h1>to do</h1>

        <a href='null' label=" Toggle DarkMode button" aria-label='Toggle Dark Mode'
         className='.icon'
         onClick={(e)=>{toggleDarkmode(e)}}>
        {darkMode===false?<ReactLogoMoon aria-label="Moon icon to switch to darkmode"/>:<ReactLogoSun aria-label="Moon icon to switch to lightmode"/>}
        </a>

        </div>
            <TaskInput inputText={inputText}
            setInputText={setInputText}
             newItem={data}
             setNewItem={updateData}
             darkMode={darkMode}
             />
        </div>
    )
}

export default Header