import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import Clock from './components/Clock';
import Counter from './components/Counter';

function App() {
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [count, setCount] = useState(0);

  const filteredTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <Clock />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TodoList 
          todos={filteredTodos} 
          addTodo={addTodo} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo}
        />
        <Counter 
          count={count} 
          increment={incrementCounter} 
          decrement={decrementCounter} 
        />
      </header>
    </div>
  );
}

export default App;
