

function ListItem(props) {
    const { currentVal, updateVal } = props

    function renderList(item) {
        const { id, text, status, editing } = item

        return (
            <li key={id} id={'li--' + id} className={getClassName(status)}>
                {editing ? (<input id={'inpt-li--' + id} defaultValue={text} />) : (<span>{text}</span>)}
                {editing !== true && (<button onClick={handleMarkDone} id={'btn-done--' + id} disabled={status === 'done'}>Mark Done</button>)}
                <button onClick={handleEdit} id={'edit-done' + id} disabled={status === 'done'}>{editing ? 'edit done' : 'edit'}</button>
            </li>
        )

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
    function handleMarkDone(event) {
        let id = event.target.id
        id = id.split('--')[1]
        const index = currentVal.findIndex((todo) => todo.id === id)
        console.log('id' , id)
        const newTodos = { ...currentVal[index], status: 'done' }
        let todo = [...currentVal]
        todo[index] = newTodos
        updateVal(todo)
    }

    function handleEdit() {

    }

    return (
        <ul>
            {currentVal.map(renderList)}
        </ul>
    )



}
export default ListItem;