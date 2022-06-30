import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, value:"faire le linge", status:false},
    {id: 2, value:"faire le linge", status:false},
    {id: 3, value:"faire le linge", status:false}
  ])
  const [input, setInput] = useState("")


  function checkButton(task) {
    if (task.status) {
      return ''
    }
    else{
    return <span onClick={() =>completeTask(task)}>V</span>
    }
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
    let copyTask = [...tasks]
    copyTask.push({value:input, status:false})
    setTasks(copyTask)
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
      {tasks.map((task) =><p><span>{checkButton(task)}</span>{task.value} | <span onClick={() =>deleteTask(task)} > X</span></p>)}
    </div>
  );
}

export default App;
