
function ButtonComponent(props) {
    const { onEvent: handleEvent,
        eventChildOne: handleFirstEvent,
        eventChildSecond: handleSecondEvent,
        eventChildThird: handleThirdEvent } = props;

    return (
        <div>
            <ul className="list-style">
                <li >

                    <button onClick={handleEvent} className="open">Open
                        <button onClick={handleFirstEvent} className="mark btn">Mark</button>
                        <button onClick={handleSecondEvent} className="Archive btn" >Archive</button>
                        <button onClick={handleThirdEvent} className="Remove btn" >Remove</button>
                    </button>
                </li>

            </ul>
        </div>
    )
}

export default ButtonComponent;