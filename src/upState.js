import { useState } from "react";

function Myidea(){
    const [actualValue,changeValue]=useState(1000)

    function sub(){
        changeValue(actualValue + 1)
    }
    return(
        <div>
            <h1>{actualValue}</h1>
            <button onClick={sub}>click me add</button>
        </div>

    )
}
export default Myidea;