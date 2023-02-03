

import { useState } from "react"
import AddTodo from "./addComponentTodo"
import ListItem from "./addTodoList"

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

    return (
        <div>
            <AddTodo addTodo={addTodo} />
            <ListItem currentVal={currentVal} updateVal={updateVal} />
        </div>
    )
}
export default ContainerTodo;