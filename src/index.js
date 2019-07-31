import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import TodoItemList from './todos';

ReactDOM.render(
    // <TodoApp />,
    <TodoItemList />,
    document.getElementById('root')
);