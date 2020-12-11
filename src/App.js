import React from 'react';
import './App.css';
import Form from './form';
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
      task_type: 'Home',
      details: 'i need to clean the inside and outside of car',
      objectID: 1,
    },
    {
      title: 'gardening',
      task_type: 'Home',
      details: 'i need to plant new flowers',
      objectID: 2,
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  const [toDoList, setToDoList] = React.useState(initialToDoList);
  const [editing, setEditing] = React.useState(false);
  const [pObjectID, setPObjectID] = React.useState(0);
  const [nextID, setNextID] = React.useState(3);
  const [title, setTitle] = React.useState('');
  const [task_type, setTaskType] = React.useState('');
  const [details, setDetails] = React.useState('');

  const handleRemoveItem = item => {
    const newTodoList = toDoList.filter(
      toDo => item.objectID !== toDo.objectID
    );
    setToDoList(newTodoList);
  }

  const handleEditItem = item => {
    toDoList.forEach((arrayItem) => {
      if(item.objectID === arrayItem.objectID){
        setTitle(item.title);
        setTaskType(item.task_type);
        setDetails(item.details);
        setEditing(true);
        setPObjectID(item.objectID);
        handleRemoveItem(arrayItem);
      }
    });
    
  } 

  const handleAddItem = (event) => {

    let objectID; 

    if(editing === true){
      objectID = pObjectID;
      setEditing(false);

    } else {
      let lastObject = toDoList[toDoList.length -1];
      let lastObjectID = lastObject.objectID;
      let newObjectID = lastObjectID + 1;
      setNextID(newObjectID);
      objectID = nextID;
    }

    
    const task = {title, task_type, details, objectID};
    const newList = [...toDoList, task];
    newList.sort((a,b) => a.objectID - b.objectID);
    
    setToDoList(newList);
    setNextID(nextID + 1);
    setTitle("");
    setTaskType("");
    setDetails("");

    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      input => (input.value = "")
    );
    Array.from(document.querySelectorAll("select")).forEach(
      input => (input.value = "")
    );
    event.preventDefault(); 
    
  } 

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  };

  const handleTaskTitle = event => {
    setTitle(event.target.value)
  };

  const handleTaskType = event => {
    setTaskType(event.target.value)
  };

  const handleTaskDetails = event => {
    setDetails(event.target.value)
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
        <Form 
          title={title}
          task_type={task_type}
          details={details}
          titleF={handleTaskTitle}
          task_typeF={handleTaskType}
          detailsF={handleTaskDetails}
          onAddItem={handleAddItem}
         />  
      </div>
      <div>
        <List 
          list={searchedTasks} 
          onRemoveItem={handleRemoveItem}
          onEditItem={handleEditItem} 
        />
      </div>
      

    </div>
    
  );
}

export default App;
