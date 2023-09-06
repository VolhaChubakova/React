import './GenreSelect.css';
import React, {useState} from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';


function GenreSelect (props) {
    const [isOpened, setOpened] = useState(true);
    const [rotateIcon, setRotateIcon] = useState(false);
    const [currentlySelectedArr, setCurrentlySelectedArr] = useState(props.currentlySelectedArr);
    
    const rotate = rotateIcon ? "rotate(180deg)" : "rotate(0)";
    const iconStyles = { color: "#F65261", fontSize: "1.5em", position: 'absolute', top: '12px', right: '16px', transform: rotate  };

    function showItems() {
        setOpened(!isOpened);
        setRotateIcon(!rotateIcon);
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
            Select Genre <IoMdArrowDropdown style={iconStyles}/>
        </button>

        {isOpened ? (
            <ul className='GenreSelect-list' >
                {
                    props.list.map((item) =>
                    <li className='GenreSelect-item' key={item.toString()} >
                        <input className='GenreSelect-checkbox' defaultChecked = {currentlySelectedArr.some(i => i === item)} type="checkbox" onClick={(e) => {handleClick(e, item);}} />
                    {item}</li>
                )}
            </ul>
        ):<div></div>}
        </div>)
}

export default GenreSelect;
