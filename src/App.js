import React, { useState } from 'react'
import { Overview } from "./components/Overview"

const originalTasks = ['task 1', 'task 2', 'task 3']


function onClick(e, setTasks, task, tasks) {
  setTasks(
    [...tasks, task]
  )
  console.log(tasks)
}

function onInputChange(e, setTask) {
  setTask(e.target.value)
}

function App() {
  const [tasks, setTasks] = useState(originalTasks);
  const [task, setTask] = useState('')

  return (
    <div>
      <input onChange={e => onInputChange(e, setTask)} />
      <button onClick={e => onClick(e, setTasks, task, tasks)}>Submit</button>
      <Overview tasks={tasks} />
    </div>
  );
}

export default App;
