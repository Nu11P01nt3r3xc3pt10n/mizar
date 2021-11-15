import React from "react";

import './SelectedItem.css';


function SelectedItem({element}) {
  
    // Render the UI for your table
    return (
        <div className="selectedItem">
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>{element.original.firstName} {element.original.lastName}</div>
                <div>Age:{element.original.age}, visits:{element.original.visits}, status:{element.original.status}, profile progress:{element.original.progress}</div>
            </div>
        </div>
    )
}


export default SelectedItem