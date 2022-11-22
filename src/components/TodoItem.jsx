import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoTC, onTitleEditChangeAC, updateTodoTC } from '../redux/todoReducer';
import s from './TodoItem.module.css'



const TodoItem = (props) => {
    const dispatch = useDispatch();
    const editTitle = useSelector(state => state.todoPage.editTodoText)
    const deleteTodo = () => {
        dispatch(deleteTodoTC(props.id))
    } 
    const editTodo = () => {
        let title = ref.current.value;
        debugger
        dispatch(updateTodoTC(title, props.id))
        debugger

    } 
    const onTitleChange = () => {
        let title = ref.current.value;
        dispatch(onTitleEditChangeAC(title))
    }
    const ref = React.createRef();
    return (
        <div className={s.todoItem}>
            <div>{props.id}</div>
            <div>{props.title}</div>
            <div>{props.completed}</div>
            {/* <div></div> */}
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={editTodo}>Edit</button>
            <input onChange={onTitleChange} ref={ref} value={editTitle} />
        </div>
    );
};

export default TodoItem;