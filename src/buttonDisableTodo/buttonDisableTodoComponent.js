import { useRef, useState } from "react";


function ButtonDisableTodo() {
    const [currentVal, updateVal] = useState([{ id: '' + Date.now(), text: 'hello Todo', status: 'done' }]);
    const inputRef = useRef();
    const buttonRef = useRef()

    function addTodo() {
        let newText = inputRef.current.value
        let todo = {
            id: '' + Date.now(),
            text: newText,
            status: 'active'

        }

        let newTodo = [...currentVal];
        newTodo.push(todo)
        updateVal(newTodo)
        inputRef.current.value = ''
        buttonRef.current.disable = true
    }

    function renderIteam() {
        return (
            <div>
                <input type='text' ref={inputRef} onChange={handleChangeFn} placeholder='add something'></input>
                <button onClick={addTodo} ref={buttonRef}>Add</button>
            </div>
        )
    }
    function handleChangeFn(event) {
        let newRef = event.target.value
        if (newRef.trim().length > 0) {
            buttonRef.current.disable = false
        } else {
            buttonRef.current.disable = true
        }
    }

    function getClassForTodo() {

    }

    function handleDone() {

    }

    function renderListIteam(iteam) {
        const { id, text, status } = iteam
        return (
            <div>
                <li key={id} id={'li--' + id} className={getClassForTodo(status)} >
                    <h1>{id}</h1>
                    <p>{text}</p>
                    <button id={'btn-done---' + id} onClick={handleDone} disabled={status === 'done'}>mark done</button>
                </li>
            </div>
        )
    }

    function printIteam() {
        return (
            <div>

                {currentVal.map(renderListIteam)}

            </div>
        )
    }

    return (
        <div>
            {renderIteam()}
            {printIteam()}


        </div>
    )
}

export default ButtonDisableTodo;