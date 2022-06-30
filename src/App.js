import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, value:"faire le linge", status:false},
    {id: 2, value:"faire la vaisselle", status:false},
    {id: 3, value:"faire le con", status:false}
  ])
  const [input, setInput] = useState("")

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
    copyTasks.push({value:input, status:false})
    setTasks(copyTasks)
    setInput('');
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
