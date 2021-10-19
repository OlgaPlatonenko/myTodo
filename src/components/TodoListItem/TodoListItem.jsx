import React from 'react';

import styles from './TodoListItem.module.css';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important && 'bold',
    };

    const handleClick = (e) =>{
        console.log(e.target.textContent);
    }

    return (
        <div className={styles.todolistitem}  >
            <div
                style={style}
                className={styles.todolistitemLabel}
                onClick={handleClick}>
                {label}
            </div>
            <div className={styles.btngroup}>
                <button>
                    <i className="fa fa-exclamation"></i>
                </button>
                <button>
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    )
}

export default TodoListItem;