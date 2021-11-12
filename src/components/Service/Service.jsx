const Service = (props) => {
    return (
        <>
            <label>How was The Service?</label>
            <div>

                <select value={props.value} onChange={props.serviceChange}>
                    <option  >N/A</option>
                    <option value='0.1' >Average 10%</option>
                    <option value='0.15'>Good 15%</option>
                    <option value='0.25'>Excellent 25%</option>
                </select>

            </div>
        </>

    )
}



export default Service;