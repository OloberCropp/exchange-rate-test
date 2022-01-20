import './Styles/App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout';
import StartScreen from './Components/StartScreen';
import NotFound from './Components/NotFound';
import Settings from './Components/Settings';


function App() {

  const [currenciesList, setCurrenciesList] = useState([]);
  const [chosenOnes, setChosenOnes] = useState([431, 451, 456]);
  const [inputData, setInputData] = useState({});
  const [rates, setRates] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const currentDate = new Date();

  useEffect(() => {
    const getCurrenciesList = async () => {
      const res = await fetch('https://www.nbrb.by/api/exrates/currencies');
      const allCurrenciesList = await res.json();

      const SupportedCurrencies = allCurrenciesList.filter(cur => {
        const dateEnd = new Date(cur.Cur_DateEnd);
        return dateEnd >= currentDate;
      })

      setCurrenciesList(SupportedCurrencies);
    }
    getCurrenciesList();
  },[])

  useEffect(() => {
    const getExRate = async () => {
      const rates = await Promise.all( chosenOnes.map( async (id) => await getRateByID(id) ) );
      setRates(rates);
    }
    getExRate();
  },[chosenOnes, refresh]);

  
  const getRateByID = async (id) => {
    const res = await fetch(`https://www.nbrb.by/api/exrates/rates/${id}`);
    const data = await res.json();
    return data;
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/*' element={<Layout />} >

          <Route path='/*' element={ <StartScreen 
            currenciesList={currenciesList} 
            chosenOnes={rates} 
            spreadInputData={inputData} 
            inputValue={(e)=>setInputData(() => e)} 
            refreshRates={()=>setRefresh(!refresh)} 
            />} 
          />
          
          <Route path='settings' element={ <Settings 
            currenciesList={currenciesList} 
            addCurrency={(e)=>{setChosenOnes([...chosenOnes, e])}} 
            rates={rates} 
            newRates={(e)=>setRates(e)} 
            />} 
          />
          
          <Route path='*' element={ <NotFound /> } />
        
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
