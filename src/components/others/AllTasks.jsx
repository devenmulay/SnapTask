import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
    const [userData, setUserData] = useContext(AuthContext)
    // console.log(authData.employees)
  return (
    <div id='tasklist' className='bg-[#1e1e1e] p-5 mt-3 rounded-2xl '>
        <h2 className='text-xl font-bold text-gray-100 mb-6'>Task Overview</h2>
        <div className='bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-white'>Employee Name</h2>
            <h3 className='w-1/5 text-white'>New Task</h3>
            <h5 className='w-1/5 text-white'>Active task</h5>
            <h5 className='w-1/5 text-white'>Completed Task</h5>
            <h5 className='w-1/5 text-white'>Failed Task</h5>
        </div>
        <div > 
            {userData.map(function(elem,idx){ // did this to print div's based on no employees , authData represents whole data and elem rep each object or array in that data
                return <div key={idx} className='bg-[#383838] hover:bg-[#2a2a2a] mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-white'>{elem.firstName}</h2>
                <h3 className='w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h3>
                <h5 className='w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>
                <h5 className='w-1/5 text-green-600'>{elem.taskNumbers.completed}</h5>
                <h5 className='w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
            </div>
            })}
        </div>
    </div>
  )
}

export default AllTasks