import React from 'react'
import '/Users/daniel/Desktop/todolist/src/components/App.css'

export default function ToDoList(props) {

    const handleCheck = function() {
    }

    const todolist = props.todos.length ? (
        props.todos.map((todo) => {
            return (
                <div className="todocollection" key={todo.id}>
                    <input type="checkbox" onChange={handleCheck} defaultChecked={props.checked}/>
                    <span>{todo.content}</span>
                    <button onClick={() => {props.deleteTodo(todo.id)}}>remove</button>
                </div>
            )
        })
    ) : (
        <p className="todolist"> 할 일 없음 </p>
    )

    const list = props.lists.length ? (
        props.lists.map((list) => {
            return (
                <div className="listcollection" key={list.id}>
                    <span onClick={() => {props.changeList(list.id)}}>{list.content}</span>
                    <button onClick={() => {props.deleteList(list.id)}}>remove</button>
                </div>
            )
        })
    ) : (
        <p className="listitems"> 목록 없음 </p>
    )

    return (
        <div className='float'>
            <div className="listscollection">
            {list}
            </div>
            <div className="todoscollection">
            {todolist}
            </div>
        </div>
    )
}
