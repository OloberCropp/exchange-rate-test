import React from 'react';
import {FaTools, FaSyncAlt} from 'react-icons/fa';
import CurrencyInput from './CurrencyInput';
import { Link } from 'react-router-dom';

const StartScreen = ({chosenOnes, inputValue, spreadInputData, refreshRates}) => {

    const currentDate = new Date().toLocaleDateString();

    return (
        <div className='StartScreen'>
            <div className='container'>
                <div className='subNav'>
                    <p>Официальный курс, устанавливаемый Национальным банком Республики Беларусь на {currentDate}</p>
                    
                    <span className='nav'>
                        <Link className='btn nav__btnLeft' to='settings'><FaTools /></Link>
                        <button className='btn nav__btnRight' onClick={refreshRates}><FaSyncAlt /></button>
                    </span>
                </div>

                <div className="StartScreen__Currencies">
                    <CurrencyInput curName='Белорусский Рубль' abbreviation='BYN' rate={1} curScale={1} inputValue={inputValue} spreadInputData={spreadInputData} />
                    {chosenOnes.map((cur, index) => {
                        return <CurrencyInput 
                        key={index} 
                        rate={cur.Cur_OfficialRate}
                        curScale={cur.Cur_Scale}
                        spreadInputData={spreadInputData}
                        curName={cur.Cur_Name} 
                        abbreviation={cur.Cur_Abbreviation} 
                        inputValue={inputValue}
                        />
                    })}
                
                </div>
            </div>

        </div>
    )
}

export default StartScreen
