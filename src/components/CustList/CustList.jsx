const CustList =(props)=>{
    const list=props.value.map((item,index) =>{
        return(
            <li key={index}>{item}</li>
        )
    });
    return(
        
        <ul>{list}</ul>
        
    )
}



export default CustList;