import React from 'react';
import Todo from './Todo';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './TodoList.css';

const TodoList = (props) => {
    return (


        <div className="my-2 todolist__container">

                {props.filteredTodoItem.map((data) => (
                    <Todo 
                    setTodoItem = {props.setTodoItem}
                    todoItem = {props.todoItem}
                    data = {data}
                    key={data.id} 
                    id = {data.id} 
                    date = {data.date} 
                    todo = {data.todo} />
                ))} 
        </div>
    )
}

export default TodoList