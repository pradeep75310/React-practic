
import './toggleButton/style.css'
import Screenmanager from './toggleButton/screenManager';



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
     <Screenmanager/>
    </div>
  );
}

export default App;
