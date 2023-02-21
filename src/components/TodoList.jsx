import React from "react"

const TodoList = (props) => {
    return (
        <div className='todo-item'>
            <input type="checkbox" onChange={() => props.completed(props.id)} />
            <p className='ml'>{props.item}</p>
        </div>
    )
}
export default TodoList;
