import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Overview({ tasks, setTasks }) {
    return (
        <div>
            {tasks.map((task, index) => Task(task, index, tasks, setTasks))}
        </div>
    )
}

function deleteTask(index, tasks, setTasks) {
    const mytasks = [...tasks]
    mytasks.splice(index, 1)
    setTasks(
        mytasks
    )
}

function Task(task, index, tasks, setTasks) {
    return (
        <div key={index}>
            <span>{index + 1}. {task}</span> <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTask(index, tasks, setTasks)} />
        </div>
    )
}

export { Overview }
