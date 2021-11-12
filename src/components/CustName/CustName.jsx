import './custName.css'

const CustName =(props)=>{
    return (
        <>
        <h5>Customer Name</h5>
        <input type="text" className ="input"value={props.value} onChange={props.onChangeName}></input>
        </>
    )
}




export default CustName;