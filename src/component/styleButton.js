function StyleButton(props){
    const {type , label} = props;


return(
    <div>
        <button className={type}>{label}
        </button>
    </div>
)
}

export default StyleButton;