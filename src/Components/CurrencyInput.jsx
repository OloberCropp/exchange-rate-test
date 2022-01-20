import { useState, useEffect } from "react";
import {FaCopy} from 'react-icons/fa'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CurrencyInput = ({ abbreviation, curName, inputValue, rate, spreadInputData, curScale}) => {

    const [inFocus, setInFocus] = useState(false);
    const [newVal, setNewVal] = useState('');

    const gal = (val) => {
        inputValue({rate, val, curScale})
    }    

    useEffect(()=>{
        if(inFocus && spreadInputData.val) {
            const v = spreadInputData.val 
            setNewVal(v)
        }else if(!inFocus && spreadInputData.val){
            const v = spreadInputData.val / rate * spreadInputData.rate * curScale;
            setNewVal(v.toFixed(2));
        }else{
            setNewVal('')
        }
    },[spreadInputData])


    return (
        <div className='currencyForm' >
            <div className="curInfo">
                <label className="curName">{curName}</label>
                <label className="curName">{rate}</label>
            </div>
            
            <span className='curWrapper'>
                <label>{abbreviation}</label>
                
                <input 
                type="number" 
                onFocusCapture={()=>setInFocus(true)}
                onBlur={()=>setInFocus(false)}
                onChange={(e)=>gal(e.target.value)} 
                value={newVal}
                />

                <CopyToClipboard text={newVal}>
                    <button className='btn copyToCB-btn'><FaCopy /></button>
                </CopyToClipboard>
            </span>
        </div>
    )
}

export default CurrencyInput
