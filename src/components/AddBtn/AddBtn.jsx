const AddBtn=(props)=>{
    return(
        <>
        <button type="button" className="btn btn-secondary" onClick={props.onAddClick} >{props.value} </button>
        </>
    )

}



export default AddBtn;