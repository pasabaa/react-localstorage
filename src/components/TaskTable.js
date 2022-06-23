import { TaskRow } from "./TaskRow"

export const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {

    const taskTableRows = (doneValue) => {
        return(
            tasks
            .filter(task=> task.done === doneValue)
            .map(task => (
                <TaskRow toggleTask={toggleTask} task={task} key={task.name}/>
             ))
        )
    }

    return(
        <table className="table table-hover table-borderless">
            <thead>
            <tr>
                <th>Tasks</th>
            </tr>
            </thead>
    
            <tbody>
            {
                taskTableRows(showCompleted)
            }
            </tbody>
       </table>
    )
}