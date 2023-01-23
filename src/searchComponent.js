import { useState } from "react";

function SearchComponent() {
    const [inpuetValue, changeValue] = useState("pradeep")

    function onChange(event) {
        changeValue(event.target.value)
    }

    return (
        <div>
            <h1>{inpuetValue}</h1>
            <input type="text" value={inpuetValue} onChange={onChange} placeholder='enter name' ></input>
                {/* <input type="submit"/> */}
            
            
        </div>
    )
}
export default SearchComponent;