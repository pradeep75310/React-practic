

import { useState } from "react"
import AddTodo from "./addComponentTodo"
import ListItem from "./addTodoList"
import ListRender from "./listRender"


function ContainerTodo() {
    const [currentVal, updateVal] = useState([

    ])
    function addTodo(text) {
        const item = {
            id: '' + Date.now(),
            text,
            status: 'active',
            editing: false
        }
        const newTodo = [...currentVal]
        newTodo.push(item)
        updateVal(newTodo)
    }
    function markdone(todo) {
        let cr = todo
        
        updateVal(cr)
    }

    return (
        <div>
            <AddTodo addTodo={addTodo} />
            <ListItem currentVal={currentVal} markdone={markdone}/>
        </div>
    )
}
export default ContainerTodo;