import React from 'react';

import './TodoListItem.css';

export const TodoListItem = ({ label, important, done, onDone, onDelete, onImportant }) => {
    let className = 'todolistitem';

    if (done) {
        className += ' done';
    }

    if (important) {
        className += ' important';
    }

    return (
        <div className={className} >
            <div
                className='todolistitemLabel'
                onClick={onDone}>
                {label}
            </div>
            <div className='btngroup'>
                <button onClick={onImportant}>
                    <i className="fa fa-exclamation"></i>
                </button>
                <button onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    );

}

export default TodoListItem;
