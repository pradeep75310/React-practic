import { useState } from "react";

function Convertor() {
    const [currentVal, updateVal] = useState([])

    function celesis(event) {
        let newText = event.current.value
        let text = {
            c: newText,
            f: (newText * 9 / 5 + 32).toFixed(2)
        }
        updateVal(text)
        currentVal.current.value = ''
    }
    function foranhetit(event) {
        let newText = event.current.value
        let text = {
            c: newText,
            f: ((newText - 32) * 5 / 9).toFixed(2)

        }
        updateVal(text)
        console.log('updateValue ', updateVal)
        currentVal.current.value = ''
    }

    function render() {
        return (
            <div>
                <input type="text" placeholder="type value" />
                <button onClick={celesis}>Celesis</button>
                <button onClick={foranhetit}>foranhetit</button>
            </div>
        )
    }

    //   function list(iteam){
    //     const {c , f} = iteam

    //     return(
    //         <div>
    //         <li>
    //             <span>{c}</span>
    //             <span>{f}</span>
    //         </li>
    // <div>
    //     <ul>
    //         {currentVal.map(list)}
    //     </ul>
    // </div>

    //         </div>
    //     )
    //   }

    return (
        <div>
            <ul>
                {render()}
                {/* {list()} */}
            </ul>
        </div>
    )


}

export default Convertor;