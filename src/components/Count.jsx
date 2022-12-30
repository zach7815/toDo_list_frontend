import React from "react";

export const Count = ({toDo})=>{
    return(
        <>
        {toDo.length===1?<span> 1 item left</span>:
        <span> {toDo.length} items left</span>}
        </>
    )
}