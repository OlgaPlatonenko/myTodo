import React from 'react';

import styles from './Header.module.css';

export const Header = ({todos}) => {

    let done = todos.filter(item => item.done === true).length;
    const notdone = todos.length-done;

    return (
        <div className={styles.header}>
            <h1 className={styles.header}> My ToDo List</h1>
            <h2 className={styles.header}>{done} done, </h2>
            <h2 className={styles.header}>{notdone} to do</h2>
        </div>
    )
}

export default Header;