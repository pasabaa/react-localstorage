import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';

function App() {

  const [tasksItems, setTasksItems] = useState([]);

  const [showCompleted, setshowCompleted] = useState(false)

  function createNewTask(taskName){

    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, {name: taskName, done: false}]);
    }

  }

  const toggleTask = task => {
    setTasksItems(
      tasksItems.map((t) => (t.name === task.name ? {...t, done: !t.done} : t))
    );
  }

  useEffect(()=> {
    let data = localStorage.getItem('tasks');
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, [])

  const cleanTasks =  () => {
    setTasksItems(tasksItems.filter(task => !task.done));
    setshowCompleted(false);
  }

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems])

  return (
    <div className="bg-light">
      
      <div className="container p-4">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-4">
            <TaskCreator createNewTask={createNewTask}/>

            <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>

            <VisibilityControl isChecked={showCompleted} setshowCompleted={(checked)=>setshowCompleted(checked)}/>

            {
              showCompleted && (
                <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} cleanTasks={cleanTasks}/>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
