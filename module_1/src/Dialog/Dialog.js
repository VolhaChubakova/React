import { useState } from 'react';
import { createPortal } from 'react-dom';
import DialogContent from './DialogContent/DialogContent';
import './Dialog.css';
import './DialogContent/DialogContent.css';


function Dialog(props) {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    function handleClick() {
        setIsOpen(false);
        props.onClose();
    };

    return (
        <>
            <button className='dialog-openButton' onClick={()=> {setIsOpen(true)}}>Open dialog</button>
            {isOpen && createPortal(
                <DialogContent onClose={handleClick} content={props.content} title={props.title}/>,
                document.body
            )}
        </>
    );
};

export default Dialog;