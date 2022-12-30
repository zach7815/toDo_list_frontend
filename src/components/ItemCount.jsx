import React from "react";
import { Count } from "./Count";

const ItemCount= ({toDo, clearFunct})=>{


    return(
        <div className="itemCount">
          <Count toDo={toDo}/>
            <span className="clearBtn"
            onClick={clearFunct}
            >clear completed</span>
        </div>
    )
};

export default ItemCount;