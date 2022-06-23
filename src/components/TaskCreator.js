import { useState } from 'react';

export const TaskCreator = ({createNewTask}) => {

    const [newTaskName, setNewTaskName] =  useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      createNewTask(newTaskName);
      setNewTaskName("");
    }

    return(
    
        <form onSubmit={handleSubmit} className='py-4'>
            <div className='row'>
                <div className='col-9'>
                    <label className='h4 fw-bold'>New Task</label>
                    <input className='form-control form-control-sm rounded-pill my-3' type='text' value={newTaskName} placeholder='Workout at 9:00 AM' onChange={(e) => setNewTaskName(e.target.value)}/>
                </div>
                <div className='col-3 align-self-end mb-3'>
                    <button className='btn btn-sm btn-dark rounded-pill'>Save Task</button>
                </div>
            </div>
        </form>
     )
}