import { useRef, useState } from "react"


function UncontrolTodo() {
    const currentRef = useRef()
    const [currentValue, updateValue] = useState([])
    const [oldSerialNo, newSerialNo] = useState(1)
    const [oldStatus, newStatus] = useState('pending')

    function handleTodo() {
        const newText = currentRef.current.value
        const todos = {
            id: Date.now(),
            text: newText,
            serailNo: oldSerialNo,
            status: oldStatus
        };
        const newTodos = JSON.parse(JSON.stringify(currentValue))
        newTodos.push(todos)
        updateValue(newTodos)
        currentRef.current.value = '';
        newSerialNo(oldSerialNo + 1)
    }
    function statusChange(event) {
        newStatus(event.target.value = 'done')
    }
    function renderList(iteam) {
        const { id, text, serailNo, status } = iteam;
        return (
            <div>
                <li className={oldStatus == 'done' ? 'done-li' : 'pending-li'}>
                    <span>{text}</span>
                    <span>{serailNo}</span>
                    <span>{status}</span>
                    <div className="buttonsection">
                        <button className='btn-N'>Edit</button>
                        <button className='btn-N' onClick={statusChange}>{oldStatus}</button>
                        <button className='btn-N'>Remove</button>
                    </div>
                </li>
            </div>
        )
    }
    return (
        <div>
            <div>
                <label><h2>To Don List</h2></label>
                <input type='text' ref={currentRef} />
                <button onClick={handleTodo}>Add Me</button>
            </div>
            <ol>
                <div>
                    <li>
                        <span>S.No.</span>
                        <span>To Do List</span>
                    </li>
                </div>
            </ol>
            <ol>
                {currentValue.map(renderList)}
            </ol>
        </div>
    )
}

export default UncontrolTodo;