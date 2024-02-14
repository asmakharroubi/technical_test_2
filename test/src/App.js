import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';
import {Button} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddTask />
      <ListTask/> 
    </div>
  );
}

export default App;

