import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencil, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from "react";


function Overview({ tasks, setTasks }) {
    return (
        <div>
            {tasks.map((task, index) => <Task key={index} task={task} index={index} tasks={tasks} setTasks={setTasks} />)}
        </div>
    )
}

class Task extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editMode: false,
            task: props.task
        }
    }

    deleteTask = (index, tasks, setTasks) => {
        const mytasks = [...tasks]
        mytasks.splice(index, 1)
        setTasks(
            mytasks
        )
    }

    editTask = () => {
        this.setState({
            editMode: true
        })
    }

    changeTask = (index, tasks, setTasks) => {
        const mytasks = [...tasks]
        mytasks.splice(index, 1, this.state.task)
        setTasks(mytasks)
        this.setState({
            editMode: false
        })
    }

    changeTmpTask = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    render = () => {
        let ret = (
            <div key={this.props.index}>
                <span>{this.props.index + 1}. {this.props.task}</span>
                <FontAwesomeIcon icon={faTrashAlt}
                    onClick={() => this.deleteTask(this.props.index, this.props.tasks, this.props.setTasks)} />
                <FontAwesomeIcon icon={faPencil}
                    onClick={this.editTask} />
            </div>
        )

        if (this.state.editMode) {
            ret = (
                <div key={this.props.index}>
                    {this.props.index + 1}. <input value={this.state.task} onChange={this.changeTmpTask} />
                    <FontAwesomeIcon icon={faTrashAlt}
                        onClick={() => this.deleteTask(this.props.index, this.props.tasks, this.props.setTasks)} />
                    <FontAwesomeIcon icon={faFloppyDisk}
                        onClick={() => this.changeTask(this.props.index, this.props.tasks, this.props.setTasks)} />
                </div>
            )
        }

        return ret

    }
}

export { Overview }
