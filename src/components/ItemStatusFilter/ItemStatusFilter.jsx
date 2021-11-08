import React, { Component } from 'react';

import styles from './ItemStatusFilter.module.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];

    render() {
        const { myfilter, onFilter } = this.props;      
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = myfilter===name;          
            const clazz = isActive ? 'btn-info' : 'btn-outline-info';
            return (
                <button type='button'
                    className={` btn ${clazz}` }
                    key={name}
                    onClick={() => onFilter(name)}>
                    {label}
                </button>
            );
        });

        return (
            <div className={styles.itemstatusfilter}>
                <div className='btn-group'>
                    {buttons}
                </div>
            </div>
        )
    };
}
