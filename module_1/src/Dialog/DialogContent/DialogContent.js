import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './DialogContent.css';

function DialogContent(props) {
    const closeIcon = <FontAwesomeIcon icon={faXmark} />;

    return (
        <div className='dialogContent-container' role="dialog">
            <button className='dialogContent-closeButton' onClick={props.onClose} aria-label="Close">{closeIcon}</button>
            <h3 className='dialogContent-title' tabIndex='0'>{props.title}</h3>
            <div data-testid='dialog-content'>{props.content}</div>
        </div>
    )
};

export default DialogContent;