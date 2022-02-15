import React, { useState } from 'react'
import { Overview } from "./components/Overview"

const originalTasks = ['task 1', 'task 2', 'task 3']


function onChangeFn(e, setTasks) {
  setTasks(originalTasks.filter(x => x.includes(e.target.value)))
}

function App() {
  const [tasks, setTasks] = useState(originalTasks);

  return (
    <div>
      <input onChange={(e) => onChangeFn(e, setTasks)} />
      <Overview tasks={tasks} />
    </div>
  );
}

export default App;
