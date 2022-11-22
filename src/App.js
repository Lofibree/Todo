import './App.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTodoTC, setTodosTC, onTitleChangeAC } from './redux/todoReducer';
import TodoItem from './components/TodoItem';


function App() {
  const dispatsh = useDispatch(); 
  useEffect(() => {
    // debugger
    dispatsh(setTodosTC());
  },[])
  const todosArr = useSelector(state => state.todoPage.todosArr);
  const newTodoText = useSelector(state => state.todoPage.newTodoText);
  const totalTodosCount = useSelector(state => state.todoPage.totalTodosCount);
  const todosEl = todosArr.map(t => <TodoItem id={t.id} title={t.title} completed={t.completed} />)
  const createTodo = () => {
    let title = ref.current.value
    dispatsh(createTodoTC(title, totalTodosCount));
  }
  const onTitleChange = () => {
    let title = ref.current.value;
    dispatsh(onTitleChangeAC(title))
  }
  const ref = React.createRef();



  return (
    <div className="App">
      <button onClick={createTodo}>Create Todo</button>
      <input value={newTodoText} ref={ref} onChange={onTitleChange} />
      <div className='todos'>{todosEl}</div>
    </div>
  );
}

export default App;
