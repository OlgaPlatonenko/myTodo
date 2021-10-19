import React from 'react';

import styles from './SearchPanel.module.css';

export const SearchPanel = () => {
    return (
        <div className={styles.searchpanel}>
            <input placeholder='search'></input>
        </div>
    )
}

export default SearchPanel;