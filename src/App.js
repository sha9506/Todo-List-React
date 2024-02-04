import React from "react"
import './App.css'

let App = () =>
{
  let todoList= [
    {
      taskName : 'Organize Photoshoot',
      taskTime : 'today',
    },
    {
      taskName : 'Buy Milk',
      taskTime : 'today',
    },
    {
      taskName : 'Study',
      taskTime : 'tomorrow',
    },
  ]
 return  (<div className="outer-div">
    <div className="main-box">
       <div className="head-bar">
        <div className="head-title">To-Do</div>
        <div className="create">Create Reminder</div>
        </div>
        
        <div className="todo-list">
          {
            todoList.map((item)=> {
              return (<div className="todo-items">
              <div className="circle"></div>
              <div className="content"> 
                  <div className="title">{item.taskName}</div>
                  <div className="time">{item.taskTime}</div>
              </div>
            </div>)
            })
          }
          
        </div>
    </div>
 </div>)
}

export default App