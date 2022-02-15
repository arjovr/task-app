
function Overview({ tasks }) {
    return (
        <div>
            {tasks.map((task, index) => Task(task, index))}
        </div>
    )
}

function Task(task, index) {
    return (
        <div key={index}>
            {task}
        </div>
    )
}

export { Overview }
