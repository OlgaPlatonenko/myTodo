import React from 'react';
import { Component } from 'react';

import styles from './TodoListItem.module.css';

export default class TodoListItem extends Component {

    handleClick = () => {
        console.log(`Done: ${this.props.label}`);
    };

    render() {
        const { label, important = false } = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important && 'bold',
        };

        return (
            <div className={styles.todolistitem}  >
                <div
                    style={style}
                    className={styles.todolistitemLabel}
                    onClick={this.handleClick}>
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
        );
    };
}
