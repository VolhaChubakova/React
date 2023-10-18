import './GenreSelect.css';
import React, {useState} from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { IconContext } from "react-icons";


function GenreSelect (props) {
    const [isOpened, setOpened] = useState(true);
    const [currentlySelectedArr, setCurrentlySelectedArr] = useState(props.currentlySelectedArr);
    
    function showItems() {
        setOpened(!isOpened);
    }

    function handleClick(e, val) {
        if (e.target.checked) {
            setCurrentlySelectedArr(currentlySelectedArr => [...currentlySelectedArr, val]);
            props.onSelect(val);
        } else {
            setCurrentlySelectedArr(currentlySelectedArr => currentlySelectedArr.filter((item) => item !== val));
        }     
    }

    return (<div>
        <div className='GenreSelect-header'>Genre</div>
        <button 
            className='GenreSelect-button'
            onClick={() => {showItems()}}
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
        ):<div></div>}
        </div>)
}

export default GenreSelect;
