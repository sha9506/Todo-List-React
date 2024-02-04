import React from "react";
import './style.css';

let Modal= ({onclose}) =>
{
    return (<div className="modal-main">
    <div className="modal-item">
      <div className="modal-head">
        <div className="modal-head-title">Enter a new task</div>
        <div onClick={()=>{onclose()}}>X</div>
      </div>
      <div className="task-entry">
        <div className="task-name-item">
          <div className="task-name">Task Name</div>
          <div className="task-name-entry">
              Enter the task
          </div>
        </div>
        <div className="task-time-item">
          <div className="task-time">Task Time</div>
          <div className="task-time-entry">
              Enter the time of completion
          </div>
        </div>
        <div className="more-info">
          By clicking on save button you can add the new task to the list. 
        </div>
      </div>
      <div className="modal-footer">
          <div className="task-cancel" onClick={()=>{onclose()}}>
            Cancel
          </div>
          <div className="task-save">Save</div>
      </div>
    </div>
</div>)
}

export default Modal