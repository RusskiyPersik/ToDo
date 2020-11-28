import React from 'react';
import './App.css';
import List from './list.js';
import Search from './search.js';

const App = () => {
  const initialToDoList = [
    {
      title: 'Grocery Shopping',
      task_type: 'Outing',
      details: 'I need to pick up eggs, milk, and cheese',
      objectID: 0,
    },
    {
      title: 'clean car',
      task_type: 'home',
      details: 'i need to clean the inside and outside of car',
      objectID: 1,
    },
    {
      title: 'gardening',
      task_type: 'home',
      details: 'i need to plant new flowers',
      objectID: 2,
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  const [toDoList, setToDoList] = React.useState(initialToDoList);

  const handleRemoveItem = item => {
    const newTodoList = toDoList.filter(
      toDo => item.objectID !== toDo.objectID
    );
    setToDoList(newTodoList);
  }

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  };

  const searchedTasks = toDoList.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>To Do List</h1>

      <Search search={searchTerm} onSearch={handleSearch}/>
      <p>Searching for: <strong>{searchTerm}</strong></p>
      <hr />

      <div>
        <List list={searchedTasks} onRemoveItem={handleRemoveItem}/>
      </div>
      

    </div>
    
  );
}

export default App;
