import {useState, useRef} from 'react';

function TodoComponent() {
  const [todos, updateTodos] = useState([
    {id:''+Date.now(), text:'default todo item', status:'done'}
  ]);
//   const [addButtonDisable, updateAddButtonDisable] = useState(true);
  const inputRef = useRef();
  const buttonRef =useRef()

  function addTodo() {
    const item = {
      id: ''+Date.now(),
      text: inputRef.current.value,
      status: 'active'
    }
    const newTodos = [...todos];
    newTodos.push(item);
    updateTodos(newTodos);
    inputRef.current.value = '';
    buttonRef.current.disabled=true
  }
  function renderTodoAdder() {
    return (
      <div>
        <input ref={inputRef} placeholder='add todo text' onChange={handleInputTextChange} />
        <button onClick={addTodo} ref={buttonRef}>Add</button>
      </div>
    )
  }

  function handleInputTextChange(event) {  
    let inputText = event.target.value
    console.log('input text has----', inputText, ' and length is', inputText.length);
    if(inputText.trim().length > 0) {
        buttonRef.current.disabled=false
    } else {
        buttonRef.current.disabled=true
    }
  }

  function renderList() {
    return (
      <ul>
        {
          todos.map((todo) => {
            const {id, text, status} = todo;
            return (
              <li key={id} id={'li--'+id} className={getTodoStatusClass(status)}>
                <p>{text}</p>
                <button
                  id={'btn-done--'+id}
                  onClick={handleMarkDone} 
                  disabled={status=='done'}>
                    Mark done
                </button>
              </li>
            )
          })
        }
      </ul>
    )
  }

  function handleMarkDone(event) {
    let id = event.target.id;
    id = id.split('--')[1];
    // function findFn(todo) {
    //   return id === todo.id
    // }
    // const index = todos.findIndex(findFn);
    const index = todos.findIndex((todo) => id === todo.id);
    const todo = {...todos[index], status:'done'}
    const newTodos = [...todos];
    newTodos[index] = todo;
    updateTodos(newTodos);
  }

  function getTodoStatusClass(status) {
    if(status === 'active') {
      return 'active'
    } else if(status === 'done') {
      return 'done'
    } else {
      return ''
    }
  }

  return(
    <div>
      {renderTodoAdder()}
      {renderList()}
    </div>
  )
}

export default TodoComponent;