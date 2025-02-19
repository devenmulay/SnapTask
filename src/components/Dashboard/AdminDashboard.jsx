import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10 '> 
        <Header changeUser={props.changeUser} data={props.data}/>
        <CreateTask />
        <AllTasks />
    </div>  
  )
}

export default AdminDashboard