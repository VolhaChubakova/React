import './SearchForm.css';
import React, {useState} from 'react';


function SearchForm (props) {
    const [query, setQuery] = useState(props.value);

    function handleChange(e) {
        setQuery(e.target.value)
    }
    
    return (<div>
        <input 
            className='SearchForm-input'
            placeholder="What do you want to watch"
            value={query}
            data-testid='searchForm-input'
            onChange = {handleChange}
            onKeyDown = {(e) => {
                if (e.code === 'Enter') {
                    props.onSearch(query)
                }
            }}
        />
        <button 
            className='SearchForm-button'
            data-testid='searchForm-submitBtn'
            onClick={() => props.onSearch(query)}
        >SEARCH</button>
        </div>)
}

export default SearchForm;
