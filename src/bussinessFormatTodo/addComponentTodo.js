import { useEffect, useRef } from "react";

function AddTodo(props) {
    const inputRef = useRef()
    const buttonRef = useRef()


    useEffect(() => {
        buttonRef.current.disabled = true;
        inputRef.current.focus();
    }, [])


    function handleDisableBtn(event) {
        let newBtn = event.target.value
        if (newBtn.trim().length > 0) {
            buttonRef.current.disabled = false
        } else {
            buttonRef.current.disabled = true
        }
    }


    function addTodoComponent() {
        const { addTodo } = props
        const text = inputRef.current.value
        addTodo(text)
        inputRef.current.value = ''
        buttonRef.current.disabled = true
    }

    return (
        <div>
            <input ref={inputRef} onChange={handleDisableBtn} placeholder='type Something' />
            <button onClick={addTodoComponent} ref={buttonRef}>Add</button>
        </div>
    )
}

export default AddTodo;