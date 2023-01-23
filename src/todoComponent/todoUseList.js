import { useState } from "react";

function AppFn(){
    const [iteam,setIteam] = useState([])
    const [inputList , setInput]=useState("")

    function iteamList(event){
        setInput(event.target.value)
    }

    function listOfIteam(){
        setIteam((oldIteams)=>{
            return[...oldIteams,inputList]
           
        })
        setInput("")
    }

     function itemval(iteamlist){
        return(
            
            <div className="todo_style">
            <li>
            <button className=".fa-time" aria-hidden='true'>X</button>
                {iteamlist}
            </li>
            </div>
        )
     }
    return(
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1 className="h1todo">ToDO List</h1>
                <br/>
                <input type="text" placeholder="Add A iteam" value={inputList} onChange={iteamList}/>
                <button className="buttontodo" onClick={listOfIteam}>+</button>

                <ol>
                    {/* <li>
                        {inputList}
                    </li> */}
                    {iteam.map(itemval)}
                </ol>
            </div>
        </div>
    )
}

export default AppFn;