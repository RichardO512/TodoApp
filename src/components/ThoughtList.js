import React from 'react';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Thought from './Thought';
import './TodoList.css';

const ThoughtList = (props) => {
    return (
        <div className="my-2 todolist__container">

       
                {props.filteredThoughtItem.map((data) => (
                    <Thought 
                    setThoughtItem = {props.setThoughtItem}
                    thoughtItem = {props.thoughtItem}
                    data = {data}
                    key={data.id} 
                    id = {data.id} 
                    date = {data.date} 
                    text = {data.text} />
                ))} 
        </div>
    )
}

export default ThoughtList