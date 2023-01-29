import { useRef, useState } from "react"


function NumberToWord() {
    const [Word, UpdateVal] = useState()
    const inputRef = useRef()
    // const disableButton=useRef()

    function values() {
        let CureentVal = inputRef.current.value
        let blankArray = ''
        const OnceMap = [
            'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
            'nineteen']
        const tensMap = [
            'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ]
        // if (CureentVal > 1000 && CureentVal < 10000) {
        //     const thousandPlaceVal = parseInt(CureentVal / 100);
        //     let index = thousandPlaceVal - 1;
        //     blankArray += " " + OnceMap[index] +tensMap[index]+ " Thousand ";
        //     console.log('thousand' , thousandPlaceVal)
        //     CureentVal -= thousandPlaceVal * 1000;
        //   }
        if (CureentVal > 99 && CureentVal < 1000) {
        
            const hundredPlaceValue = parseInt(CureentVal / 100);
            let index = hundredPlaceValue - 1;
            blankArray += " " + OnceMap[index] + " hundred ";
            CureentVal -= hundredPlaceValue * 100;
          }
        if (CureentVal > 20 && CureentVal < 100 && CureentVal % 10 !== 0) {
            const tenPlaceValue = parseInt(CureentVal / 10);
            const index = tenPlaceValue - 1;
            blankArray += " " + tensMap[index];
            CureentVal -= tenPlaceValue * 10;
          }
          if (CureentVal <= 99 && CureentVal % 10 == 0) {
            let index = parseInt (CureentVal / 10) ;
            blankArray += tensMap[index - 1];
          }
          if (CureentVal > 0 && CureentVal < 20 && CureentVal != 10) {
            let index = CureentVal - 1;
            blankArray += " " + OnceMap[index];
          }
          if (CureentVal ==0 && CureentVal.length==0) {
            blankArray = " negative value";
          }
          UpdateVal(blankArray);
          inputRef.current.value = " ";
        //   disableButton.current.disable=true
        //   return blankArray;
        

    }

    // function handleButton(event){
    //  const newButton=event.target.value
    //  if(newButton.trim().length>0){
    //     disableButton.current.disable=false
    //  }
    //  else{
    //     disableButton.current.disable=true
    //  }

    

    return (
        <div>
            <h2>number to word</h2>
            <input type= "text "ref={inputRef}></input>
            <button onClick={values}>Add</button>
            {Word &&
            <div>
               
                    {Word}
                
            </div>
}
        </div>

    )
}

export default NumberToWord;

