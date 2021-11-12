import { useState } from "react";
import Amt from "./Amt/Amt";
import Button from "./Button/Button";
import CustList from "./CustList/CustList";
import CustName from "./CustName/CustName";
import NoOfCust from "./NoOfCust/NoOfCust";
import Service from "./Service/Service";
import Tip from "./Tip/Tip";
import AddBtn from "./AddBtn/AddBtn";

const Home = () => {
    const [amtVal, setAmtVal] = useState()
    const [nameVal, setNameVal] = useState()
    const [custVal, setCustVal] = useState()
    const [serviceVal, setserviceVal] = useState()
    const [tip, setTip] = useState(0)
    const [list, setList] = useState([])

    const amtOnChangeHandler = (event) => {
        setAmtVal(event.target.value)
    }
    const nameOnChangeHandler = (event) => {
        setNameVal(event.target.value)
    }
    const custOnChangeHandler = (event) => {
        setCustVal(event.target.value)
    }
    const serviceOnChangeHandler = (event) => {
        setserviceVal(event.target.value)
    }

    const calculateValueHandler = () => {
        let total = ((Number(amtVal)) * (Number(serviceVal))) / (Number(custVal));
        console.log(total)
        total = total.toFixed(2);
        setTip(total)
        
    }

    const addClickHandler = () => {
        if (nameVal.trim()) {
            const custList = [...list]
            custList.push(nameVal)
            setList(custList)
            setNameVal('')
        }
        else {
            setNameVal('')

        }
    }

    return (

        <>
            <div><h1 style={{textAlign: "center"}}>Tip Calculator</h1></div>
            <div>
                <Amt
                    value={amtVal} onChangeAmt={amtOnChangeHandler} />
            </div>
            <div>
                <Service value={serviceVal} serviceChange={serviceOnChangeHandler} />
            </div>
            <div>
                <CustName value={nameVal} onChangeName={nameOnChangeHandler} />
                <AddBtn value="Add" onAddClick={addClickHandler} />
            </div>
            <div>
                <CustList value={list} />
            </div>
            <div>
                <NoOfCust value={custVal} onChangeCust={custOnChangeHandler} />
            </div>
            <div>
                <Button value="Calculate" calculateHandler={calculateValueHandler} />
            </div>
            <div>
                <Tip value={tip} />
            </div>
        </>
    )
}





export default Home;