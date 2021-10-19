import React from 'react';

import styles from './ItemStatusFilter.module.css';

export const ItemStatusFilter = () => {

    return (
        <div className={styles.itemstatusfilter}>
           <div className='btn-group'>
               <button type='button' className='btn btn-info'>All</button>
           </div>
           <div className='btn-group'>
               <button type='button' className='btn btn-outline-secondary'>Active</button>
           </div>
           <div className='btn-group'>
               <button type='button' className='btn btn-outline-secondary'>Done</button>
           </div>
        </div>
    )
}

export default ItemStatusFilter;