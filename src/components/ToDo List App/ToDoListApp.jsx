import React, { useState } from 'react'

const ToDoListApp = () => {

    const [tasks, setTasks] = useState(['Get up in the morning', 'Do Exercise', 'Get ready for work'])
    const [newTask, setNewTask] = useState('')

    function handleChange(e) {
        setNewTask(e.target.value)
    }
    function handleAdd() {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask])
            setNewTask('')
        } else {
            alert('Task should not be empty')
        }
    }
    function handleDelete(index) {
        const updatedTasks = tasks.filter((t, i) => i !== index)
        setTasks(updatedTasks)
    }
    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            // let temp = updatedTasks[index]
            // updatedTasks[index] = updatedTasks[index-1]
            // updatedTasks[index-1] = temp

            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return (
        <div>
            <input type="text" placeholder='Enter the task' value={newTask} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
            <ol>
                {tasks.map((task, index) => {
                    return <li key={index}>
                        <span>{task}</span> &nbsp;
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        &nbsp;
                        <button onClick={() => moveUp(index)} >MoveUp</button>
                        &nbsp;
                        <button onClick={() => moveDown(index)}>MoveDown</button>
                    </li>
                })}
            </ol>
        </div>
    )
}

export default ToDoListApp