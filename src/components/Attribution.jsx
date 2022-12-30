import React from "react";

export default function Attribution({darkMode}){
    return(
        <>
             <div className={`attribution ${darkMode===true?'toggleDark':''}`}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
      Coded by <a href="github.com/zach7815/" target="_blank">Zachariah Kozlowski-Best</a>.
    </div>
        </>
    )
}