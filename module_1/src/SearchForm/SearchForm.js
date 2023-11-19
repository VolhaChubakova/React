import './SearchForm.css';
import React, {useState} from 'react';
import { useOutletContext, Outlet } from "react-router-dom";


function SearchForm () {
    const {value, onSearch} = useOutletContext();
    const [query, setQuery] = useState(value);
    
    return (
        <>
            <div className='SearchForm-findSection'>
                <p className='SearchForm-title'>FIND YOUR MOVIE</p>
                <div className='SearchForm-container'>
                    <input 
                        className='SearchForm-input' 
                        placeholder="What do you want to watch"
                        value={query}
                        data-testid='searchForm-input'
                        onChange = {(e)=> {setQuery(e.target.value)}}
                        onKeyDown = {(e) => {
                            if (e.code === 'Enter') {
                                onSearch(query)
                            }
                        }}
                    />
                    <button 
                        className='SearchForm-button'
                        data-testid='searchForm-submitBtn'
                        onClick={() => onSearch(query)}
                    >SEARCH
                    </button>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default SearchForm;
