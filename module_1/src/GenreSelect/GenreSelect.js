import './GenreSelect.css';
import React, {useState} from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { IconContext } from "react-icons";


function GenreSelect (props) {
    const [isOpened, setOpened] = useState(false);
    const [currentlySelectedArr, setCurrentlySelectedArr] = useState(props.currentlySelectedArr);
    
    function showItems() {
        setOpened(!isOpened);
    }

    function handleClick(e, val) {
        let values = [];
        if (e.target.checked) {
            values = [...currentlySelectedArr, val];
            props.onSelect(val);
        } else {
            values = currentlySelectedArr.filter((item) => item !== val);
        };
        setCurrentlySelectedArr(values);
        props.onCurrentlySelectedUpdated?.(values);
    }

    return (<div className='GenreSelect-wrapper'>
        <div className='GenreSelect-header'>GENRE</div>
        <div className='GenreSelect-content'>
            <button 
                className='GenreSelect-button'
                data-testid='GenreSelect-dropdown'
                onClick={() => {showItems()}}
                type='button'
            >
                Select Genre <IconContext.Provider value={{ className: 'GenreSelect-icon' }}>
                    {isOpened ? (
                        <  IoMdArrowDropup/>
                    ):<IoMdArrowDropdown />
                    }  
                </IconContext.Provider>
            </button>

            {isOpened ? (
                <ul className='GenreSelect-list'>
                    {
                        props.list.map((item, index) =>
                        <li className='GenreSelect-item' key={item.toString()}>
                            <input className='GenreSelect-checkbox' id={'checkbox_'+index} defaultChecked = {currentlySelectedArr.some(i => i === item)} type="checkbox" onClick={(e) => {handleClick(e, item);}} />
                        <label data-testid={'genre_'+index} htmlFor={'checkbox_'+index}>{item}</label></li>
                    )}
                </ul>
            ):<></>}
        </div>
        
        </div>)
}

export default GenreSelect;
