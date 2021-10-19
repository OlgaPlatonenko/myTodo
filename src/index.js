import React from 'react';
import ReactDOM from 'react-dom';

import { Header, TodoList, SearchPanel, ItemStatusFilter } from './components';


import styles from './index.module.css';

const App = () => {

    const todoData = [
        { label: 'todo1', important: false, done: true, id: 1 },
        { label: 'todo2', important: true, done: true, id: 2 },
        { label: 'todo3', important: false, done: true, id: 3 },
        { label: 'todo4', important: false, done: false, id: 4 }
    ];

    const isLoggedIn = false;
    const loginBox = <span>Log in please </span>
    const welcomBox = <span>hello </span>
    return (
        <div className={styles.container}>
            {isLoggedIn ? welcomBox : loginBox}
            <Header todos={todoData} />
            <div className={styles.searchwrapper}>
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
