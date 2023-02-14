import ListItem from "./addTodoList";

function ListRender(props){
    const {listVal} =  props
    function print(){
        return(
            <ul>
                {listVal.map(ListItem)}
            </ul>
        )
    }
    return(
        <div>
            {print}
        <ListItem/>
        </div>
    )
}
export default ListRender;