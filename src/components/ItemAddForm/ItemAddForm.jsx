import React from 'react';

import styles from './ItemAddForm.module.css';

export const ItemAddForm = ({ addItem }) => {
    return (
        <div className={styles.addform_container}>
            <button
                className='btn btn-outline-secondary'
                onClick={() => addItem('newItem')}
            >
                Add
            </button>
        </div>
    );
}

export default ItemAddForm;