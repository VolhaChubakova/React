import React from 'react';
import './SortControl.css';


function SortControl ({defaultValue, onChange, options}) {
    const handleChange = ((e)=> {
        onChange(e.target.value);
    });

    return (
        <div className='sortControl-containter'>
            <div className='sortControl-descripion'>SORT BY</div>
            <select className='sortControl-options' value={defaultValue} name='sortControl' onChange={handleChange} data-testid='sortControl-select'>
                {options.map((item, index)=> {
                    return <option key={item} className='sortControl-item' value={item} data-testid={'option_'+index}>{item}</option>
                })}
            </select>
        </div>
    )
};

export default SortControl;