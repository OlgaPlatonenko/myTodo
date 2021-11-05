import React from 'react';
import { Component } from 'react';

import styles from './SearchPanel.module.css';

export default class SearchPanel extends Component {
    state = {
        searchingString: '',
    }

    onSearch = (e) => {
        const str = e.target.value;
        this.setState({
            searchingString: str,
        });
        this.props.onSearch(str);
    }


    render() {
        return (
            <input
                className={styles.searchpanel}
                placeholder='search'
                onChange={this.onSearch}
                value={this.state.searchingString}
            >
            </input>

        )
    };


}
