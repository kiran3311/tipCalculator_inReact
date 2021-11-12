
const Button=(props)=>{
    return(
        <>
        <button type="button" className="btn btn-secondary" onClick={props.calculateHandler}>{props.value} </button>
        </>
    )
}


export default Button;
