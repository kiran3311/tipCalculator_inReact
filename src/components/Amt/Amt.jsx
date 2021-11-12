const Amt =(props)=>{
    return(
        <>
        <h5>Enter Your Amount</h5>
        <input type="number"
        value={props.value}
        onChange={props.onChangeAmt}>
            
        </input>
        </>
    )
}


export default Amt;