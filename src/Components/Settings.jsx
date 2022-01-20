import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Settings = ({currenciesList, addCurrency, rates, newRates}) => {

    const deleteRate = (id) => {
        const filterRates = rates.filter((rate, index) => index !== id);
        newRates(filterRates)
    }

    return (
        <div className='settings'>
            <div className='container'>

                <Link className='btn' to='/'>Назад</Link>
                <div className="settings__wrapper">
                    <h2 className='title'>Настройки</h2>
                    <h3>Добавить новую валюту:</h3>
                    <SearchBar currenciesList={currenciesList} addCurrency={addCurrency} />

                    <h3>Избранное:</h3>
                    <div className='settings__bookmarks'>
                        {
                            rates.map((rate, index)=>{
                                return  <div className='settings__bookmarks__bookmark' key={index}>
                                            <p>{rate.Cur_Abbreviation}</p>
                                            <p>{rate.Cur_OfficialRate}</p>
                                            <button className='btn' onClick={()=>deleteRate(index)}><FaTrash /></button>
                                        </div>
                            })
                        }
                    </div>

                </div>
                
                
            </div>
        </div>
    )
}

export default Settings
