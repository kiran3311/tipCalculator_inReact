import './NoOfCust.css'

const NoOfCust =(props)=>{
    return(
        <>
        <h5>No. Of Customer</h5>
        <input type ="number" className="inputOfNo" value={props.value} onChange={props.onChangeCust}></input>
        </>
    )
}



export default NoOfCust;