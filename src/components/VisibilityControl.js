export const VisibilityControl = ({isChecked, setshowCompleted, cleanTasks}) => {

    const handleDelete = ()=> {
        if (window.confirm('Are you sure you want to delete it?')) {
            cleanTasks();
        }
    }

    return(
        <div className="d-flex justify-content-between align-items-center p-3 text-bg-dark rounded">
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" checked={isChecked} onChange={e=> setshowCompleted(e.target.checked)} />
                <label className="fw-bold">Show Tasks Done</label>
            </div>
            <button className="btn btn-sm btn-danger rounded-pill" onClick={handleDelete}>Clear</button>
      </div>
    )
}