import { useRef, useState } from "react";


function ButtonEdit() {
    const [currentVal, updateVal] = useState([])
    const inputRef = useRef()
    const buttonRef = useRef()

    function addTodo() {
        let newText = inputRef.current.value

        let iteam = {
            id: '' + Date.now(),
            text: newText,
            status: 'active',
            editing: false

        }

        let newIteam = [...currentVal]
        newIteam.push(iteam)
        updateVal(newIteam)
        inputRef.current.value = ''
        buttonRef.current.disable = true
    }

    function todoAdderFn() {

        return (
            <div>
                <input type='text' ref={inputRef} onChange={handleDisableAdderButton} placeholder='type Some text' />
                <button onClick={addTodo} ref={buttonRef}>Add</button>
            </div>
        )
    }

    function handleDisableAdderButton(event) {
        let newRef = buttonRef.target.value

        if (newRef.trim().length > 0) {
            buttonRef.current.disable = false
        }
        else {
            buttonRef.current.disable = true
        }
    }

    function renderList(iteams) {
        const { id, text, status, editing } = iteams

        return (

            <li key={id} id={'li--' + id} className={getClassName(status)}>
                {editing ? (<input id={'input-todo--' + id} defaultValue={text} />) : (<span>{text}</span>)}
                {editing !== true && (<button id={'btn-done--' + id} onClick={handleMarkDone} disabled={status === 'done'}>Mark Done</button>)}
                <button id={'btn-edit--' + id} onClick={handleEdit} disabled={status === 'done'}> {editing ? 'Edit Done' : 'Edit'} </button>
                <button id={'btn-delete--' + id} onClick={handleDelete} disabled={status === 'done'}>delete</button>
            </li>

        )
    }
    function handleMarkDone(event) {
        let id = event.target.id
        id = id.split('--')[1]
        const index = currentVal.findIndex((todos) => todos.id === id)
        const todo = { ...currentVal[index], status: 'done' }
        const newVal = [...currentVal]
        newVal[index] = todo
        updateVal(newVal)
    }

    function getClassName(status) {
        if (status === 'done') {
            return 'done'
        } else if (status === 'active') {
            return 'active'

        } else {
            return ''
        }
    }

    function handleEdit(event) {
        let id = event.target.id
        id = id.split('--')[1]
        const index = currentVal.findIndex((todos => todos.id === id))
        const todo = { ...currentVal[index] }
        if (todo.editing) {
            let inputTodoEle = document.getElementById('btn-edit--' + id)
            todo.text = inputTodoEle.value
        }
        todo.editing = !todo.editing
        const newTodos = [...currentVal]
        newTodos[index] = todo
        console.log('new todos', newTodos)
        updateVal(newTodos)


    }

    function handleDelete() {

    }

    function renderListMap() {
        return (
            <ul>
                {currentVal.map(renderList)}
            </ul>
        )
    }
    return (
        <div>
            <ul>
                {todoAdderFn()}
                {renderListMap()}

            </ul>
        </div>
    )
}

export default ButtonEdit;