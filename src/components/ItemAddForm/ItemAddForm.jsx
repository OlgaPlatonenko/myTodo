import React from 'react';
import { Component } from 'react';

import styles from './ItemAddForm.module.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        });

    }

    render() {
        return (
            <form
                className={styles.addform_container}
                onSubmit={this.onSubmit}>
                <input
                    type='text'
                    className='form-control'
                    onChange={this.onLabelChange}
                    placeholder='what to do...'
                    value={this.state.label}
                />
                <button
                    className='btn btn-outline-secondary'
                >
                    Add
                </button>
            </form>
        );
    }
}