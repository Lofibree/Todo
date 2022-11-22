import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoTC, onTitleEditChangeAC, updateTodoTC } from '../redux/todoReducer';
import s from './TodoItem.module.css'
import { Form, Field } from 'react-final-form'
import { getDatabase, onValue, ref, set } from "firebase/database";
import { database } from '../firebase';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const deleteTodo = () => {
        dispatch(deleteTodoTC(props.id))
    } 
    const editTodo = (formData) => {
        if (formData.editTitle) {
            dispatch(updateTodoTC(formData.editTitle, props.id))
        }
    } 
    const [todoDetails, setTodoDetails] = useState({title: 'sfsdfsdf'})
    const todoRef = `todos/${props.id}`;

    const handleTitleUpdate = (formData) => {
        try {
            set(ref(database, todoRef), {
                title: formData.editTitle
            })
            debugger
            console.log('success')
            debugger
        } catch (err) {
            console.log(err)
        }
    }
    // useEffect(() => {
    //     getUpdatedTodo()
    // }, [])
    // const getUpdatedTodo = () => {
    //     try {
    //         const todoUpdateRef = ref(database, todoRef)
    //         onValue(todoUpdateRef, (snapshot) => {
    //             const data = snapshot.val();
    //             setTodoDetails(data)
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        <div className={s.todoItem}>
            <div>{props.id}</div>
            <div>{props.title}</div>
            <div>{todoDetails.title || 'no title'}</div>
            <div>{props.completed}</div>
            {/* <div></div> */}
            <button onClick={deleteTodo}>Delete</button>
            {/* <button onClick={handleTitleUpdate}>Edit</button> */}
            {/* <input onChange={onTitleChange} ref={ref} value={editTitle} /> */}
            <TodoItemForm handleTitleUpdate={handleTitleUpdate} />
        </div>
    );
};



const TodoItemForm = (props) => {
    return (
        <Form
            onSubmit={(values) => {
                props.handleTitleUpdate(values)
            }}
            render={renderProps => {
                const { handleSubmit } = renderProps;
                return (
                    <form onSubmit={handleSubmit}>
                        <Field name='editTitle' type='text' placeholder='edit title' component='input' />
                        <button type='submit'>Edit</button>
                    </form>
                )
            }}
        >
        </Form>
    )
}




export default TodoItem;