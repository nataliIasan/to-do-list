import './App.css';
import image from './list.jpg';
import imageTwo from './todo.jpg';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={image} alt="list" width="220px"/>
      </div>
      <div className='container'>
        <h1>To Do List</h1>
      </div>
      <ToDoList />
      <div className='container'>
        <img src={imageTwo} alt="todo" width="130px"/>
      </div>
    </div>
  );
}

export default App;
