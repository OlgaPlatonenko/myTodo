import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

import styles from './TodoList.module.css';

export const TodoList = ({todos}) => {

    const element = todos.map(item => {
        const {id, ...itemProps} = item;
        return(
            <li key={id} className='list-group-item'>
                <TodoListItem {...itemProps} /> 
            </li>
        );
    });

    return (
        <div className={styles.todolist}>
          <ul className='list-group'>
              {element}
          </ul>
        </div>
    )
}

export default TodoList;