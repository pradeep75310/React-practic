import { useRef, useState } from "react";


function ButtonDisableTodos() {
    const [currentVal, changeVal] = useState([])
    const inputRef = useRef()
    const buttonRef = useRef()

    function addIteam() {
        let newText = inputRef.current.value

        let todo = {
            id: " " + Date.now(),
            text: newText,
            status: 'active'
        }

        let newTodos = [...currentVal]
        newTodos.push(todo)
        changeVal(newTodos)
        inputRef.current.value = ''
        buttonRef.current.disable = true
    }

    function renderIteam() {
        return (
            <div>
                <input  ref={inputRef} onChange={handleOnChange} placeholder='type Something'></input>
                <button onClick={addIteam} ref={buttonRef}>Add Me</button>
            </div>
        )
    }

    function handleOnChange(event) {
        let buttonDisable = event.target.value

        if (buttonDisable.trim().length > 0) {
            buttonRef.current.disable = false
        }
        else {
            buttonRef.current.disable = true
        }
    }
    function renderList(iteam) {
        const { id, text, status } = iteam

        return (
            <div>
                <li key={id} id={'li--' + id} className={getClassName(status)}>
                    <p>{text}</p>
                    <button id={'btn--' + id} onClick={handleMarkDone} disabled={status === 'done'}>Mark done</button>
                </li>



            </div>
        )
    }

    

    function handleMarkDone(event) {
        let id = event.target.id
        id = id.split('--')[1]
        const index = currentVal.findIndex((todom => todom.id === id))
        let todon = {...currentVal[index], status: 'done' }
        const newTodo = [...currentVal]
        newTodo[index] = todon
        changeVal(newTodo)

    }

    function getClassName(status) {
        if (status === 'active') {
            return 'active'
        } else if (status === 'done') {
            return 'done'
        } else {
            return ''
        }
    }
    function renderListPrint() {
        return (
            <div>

              
{currentVal.map(renderList)}
               

            </div>
        )
    }
    return (
        <div>
            <ul>
                {renderIteam()}
                {renderListPrint()}

            </ul>
        </div>
    )
}
export default ButtonDisableTodos;