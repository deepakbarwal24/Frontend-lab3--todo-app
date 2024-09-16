import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); 
 
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]); 
      setNewTodo(''); 
    }
  };


  const removeTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index); // Remove the selected Todo
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
