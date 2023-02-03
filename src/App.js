import logo from './logo.svg';
import './App.css';
import ButtonComponent from './multiButton';
import SearchComponent from './searchComponent';
import AdharListCom from './component/adharIteamList';
import StyleButton from './component/styleButton';
import ComponentTodoList from './todoList/componentTodoList';
import UncontrolTodo from './uncontrolTodoList/uncontrolTodoListIteam';
import AppFn from './todoComponent/todoUseList';
import TodoComponent from './practicTodoList';
import ButtonDisableTodo from './buttonDisableTodo/buttonDisableTodoComponent';
import NumberToWord from './numberToWord/numberToWordComponent';
import ButtonDisableTodos from './buttonDisableTodo/buttonDisablePractic2';
import ButtonEdit from './buttonDisableTodo/buttonDisableTodoEdit';
import ContainerTodo from './bussinessFormatTodo/containerTodo';



function App() {

  // function handleEvent(event) 
  //   event.stopPropagation();
  //   console.log('parant class',event)

  // }
  // function handleFirstEvent(event) {
  //   event.stopPropagation();
  //   console.log('first child' ,event)

  // }
  // function handleSecondEvent(event) {
  //   event.stopPropagation();
  //   console.log('second child',event)

  // }
  // function handleThirdEvent(event) {
  //   event.stopPropagation();
  //   console.log('third child',event)

  // }
  return (
    <div className="App">
      <ContainerTodo/>
    </div>
  );
}

export default App;
