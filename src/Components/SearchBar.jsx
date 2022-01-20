import { useState } from "react";

const SearchBar = ({currenciesList, addCurrency}) => {

    const [searchValue, setSearchValue] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);
    const [mouseOnDropdown, setMouseOnDropdown] = useState(false);

    const handleClosing = () => {
        !mouseOnDropdown && setSearchOpen(false)
    }

    return (
        <div className='curSearch' onFocus={()=>setSearchOpen(true)} onBlur={()=>handleClosing()} >

            <input type="search" onChange={(e)=>setSearchValue(()=>e.target.value)} value={searchValue} />

            <div className='dropDown' onMouseEnter={()=>setMouseOnDropdown(true)} onMouseLeave={()=>setMouseOnDropdown(false)}>

                {searchOpen && currenciesList.filter(cur => { 
                    return cur.Cur_Abbreviation.toLowerCase().includes(searchValue.toLowerCase()) || 
                        cur.Cur_Name.toLowerCase().includes(searchValue.toLowerCase());
                })
                .map(cur => {
                    return  <div onClick={()=>{
                                addCurrency(cur.Cur_ID); 
                                setSearchOpen(false)
                            }} 
                            className='list__cur' 
                            key={cur.Cur_ID
                            }> 
                                <h3>{cur.Cur_Abbreviation}</h3> 
                                <h3>{cur.Cur_Name}</h3> 
                            </div>

                    })
                }
            </div>
        </div>
    )
}

export default SearchBar
