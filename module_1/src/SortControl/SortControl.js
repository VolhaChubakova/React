import React, {useState} from 'react';
import './SortControl.css';


function SortControl (props) {
    const [optionsValue, setOptionsValue] = useState(props.defaultValue);
    const handleChange = ((e)=> {
        setOptionsValue(e.target.value);
        props.onChange(e.target.value);

    });

    return (
        <div className='sortControl-containter'>
            <div className='sortControl-descripion'>SORT BY</div>
            <select className='sortControl-options' value={optionsValue} name='sortControl' onChange={handleChange} data-testid='sortControl-select'>
                {props.options.map((item, index)=> {
                    return <option key={item} className='sortControl-item' value={item} data-testid={'option_'+index}>{item}</option>
                })}
            </select>
        </div>
    )
};

export default SortControl;