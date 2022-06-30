import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")
  const [id, setId] = useState(1)

  function checkButton(task) {
    if (task.status) {
      return ''
    }
    else{
    return <span onClick={() => completeTask(task)}>V |</span>
    }
  }

  function deleteButton(task) {
    return <span onClick={() => deleteTask(task)}>| X</span>
  }

  function completeTask(completedTask) {
    // V1
    let copyTasks = tasks.map(task => task == completedTask ? {...task} : task)
    copyTasks.find((task) => task.id == completedTask.id).status = true;

    // V2
    // let copyTasks = [...tasks];
    // let newTask = {...completedTask};
    // newTask.status = true;
    // copyTasks[copyTasks.indexOf(completedTask)] = newTask;

    setTasks(copyTasks)
  }

  function newTask(){
    let copyTasks = [...tasks]
    copyTasks.push({id: id, value:input, status:false})
    setTasks(copyTasks)
    setInput('');
    setId(id + 1);
  }

  function deleteTask(taskDelete) {
    let newTask = tasks.filter((task)=> taskDelete.id != task.id);
    setTasks(newTask)
  }

  return (
    <div className="App">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => newTask()}>nouvelle tâche</button>
      {tasks.map((task) =><p>{checkButton(task)}{task.value}{deleteButton(task)}</p>)}
    </div>
  );
}

export default App;
