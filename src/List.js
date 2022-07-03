import { useEffect, useRef, useState } from 'react';
import './App.css';
import AddTodos from './component/AddTodos';
import Todos from './component/Todos';
import { useAuth } from './context/AuthContext';

// localstorage
// useRef

function List() {
  const { user } = useAuth();
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  const [userTodos, setUserTodos] = useState([]);
  const [inputData, setInputData] = useState('');
  const [selectData, setSelectData] = useState('');
  const [status, setStatus] = useState({
    input: false,
    select: false
  });

  const addTodo = () => {
    if(!inputData && !selectData) {
      setStatus({
        input: true,
        select: true
      });
    }
    else if(!inputData) {
      setStatus({
        input: true,
        select: false
      });
    }
    else if(!selectData) {
      setStatus({
        input: false,
        select: true
      });
    }
    else if(inputData.length < 3){
      setStatus({
        input: true,
        select: false
      });
    }
    else {
      setTodos(list => [
        {
          user,
          name: inputData,
          status: selectData
        },
        ...list
      ]);

      setInputData('');
      setSelectData('');
      setStatus({
        input: false,
        select: false
      });
    }
  }

  const changeSelect = e => {
    setSelectData(e.target.value);
    setStatus(status => ({
      ...status,
      select: false
    }));
  }

  const changeInput = () => {
    setInputData(inputRef.current.value);

    if((inputRef.current.value).length > 2){
      setStatus(status => ({
        ...status,
        input: false
      }));
    }
  }

  useEffect(() => {
    if(todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem('todos'));
    setTodos(newData || []);
  }, []);

  const deleteItem = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  useEffect(() => {
    const data = todos.filter(item => item.user === user);
    setUserTodos(data);
  }, [todos, user]);


  return (
    <div className="App">
      <AddTodos 
        inputRef={inputRef}
        status={status}
        inputData={inputData}
        changeInput={changeInput}
        selectData={selectData}
        changeSelect={changeSelect}
        addTodo={addTodo}
      />
      <Todos
        todos={userTodos}
        deleteItem={deleteItem} />
    </div>
  );
}

export default List;
