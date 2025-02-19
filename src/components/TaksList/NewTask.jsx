import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { toast } from 'react-toastify';

const NewTask = ({data}) => {
    const[userData,setUserData] = useContext(AuthContext)
    function HandleAcceptTask(){
        const upDateUserData = [...userData];
        upDateUserData.forEach((emp)=>{
            const taskIndex = emp.tasks.findIndex(function(task){
                return task.title === data.title
            })
            if(taskIndex!==-1){
                emp.tasks[taskIndex] = {
                    ...emp.tasks[taskIndex],
                    active:true,
                    newTask:false
                }
                emp.taskNumbers.active += 1;
                emp.taskNumbers.newTask -= 1;
                toast.info('Task Accepted')
            }
        })
         setUserData(upDateUserData)
    }
  return (
    <div className='flex-shrink-0 w-[300px] bg-[#252525] border-2 border-indigo-900 rounded-xl p-5 hover:shadow-md transition-all duration-200'>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-lg text-sm font-medium'>{data.category}</h3>
                <h4 className='text-sm text-gray-400'>{data.date}</h4>
            </div>
            <h2 className='mt-4 text-lg font-semibold text-gray-100'>{data.title}</h2>
            <p className='mt-2 text-sm text-gray-300'>
                {data.description}
            </p>
            <div className='mt-4'>
                <button onClick={HandleAcceptTask} className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask