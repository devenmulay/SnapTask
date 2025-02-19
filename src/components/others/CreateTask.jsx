import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { toast } from 'react-toastify'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    // const [newtask, setNewTask] = useState({})

    function submitHandler(e) {
        e.preventDefault();
    
        const newTask = {
            title,
            description,
            date,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };
    
        // ✅ Create a NEW array instead of mutating the existing one
        const updatedUserData = userData.map(emp => {
            if (emp.firstName === asignTo) {
                return {
                    ...emp,  // Keep other employee properties unchanged
                    tasks: [...emp.tasks, newTask], // ✅ Create a NEW tasks array
                    taskNumbers: {
                        ...emp.taskNumbers, // ✅ Keep other taskNumbers unchanged
                        newTask: emp.taskNumbers.newTask + 1, // ✅ Update count correctly
                    }
                };
            }
            return emp;
        });
    
        setUserData(updatedUserData); // ✅ Now React detects the state change
        localStorage.setItem("employees", JSON.stringify(updatedUserData));
    
        setTitle('');
        setDescription('');
        setDate('');
        setAsignTo('');
        setCategory('');
        toast.success('Task Created Successfully');
    }
    

  return (
    <div className='bg-[#1e1e1e] p-6 rounded-xl shadow-md shadow-black/10 mt-6'>
        <h2 className='text-xl font-bold text-gray-100 mb-6'>Create New Task</h2>
            <form onSubmit={(e)=>{submitHandler(e)}} className='flex w-full items-start justify-between flex-wrap text-white'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                        value={title} onChange={(e)=>{setTitle(e.target.value)}}
                        className='text-sm, w-4/5 px-4 py-2 rounded-lg outline-none bg-[#383838] ' type="text" placeholder='Title' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                        value={date} onChange={(e)=>{setDate(e.target.value)}}
                         className='text-sm, w-4/5 px-4 py-2 rounded-lg outline-none bg-[#383838] 'type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input 
                        value={asignTo} onChange={(e)=>{setAsignTo(e.target.value)}}
                        className='text-sm, w-4/5 px-4 py-2 rounded-lg outline-none bg-[#383838] ' type="text" placeholder='Emplyee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                        value={category} onChange={(e)=>{setCategory(e.target.value)}} 
                        className='text-sm, w-4/5 px-4 py-2 rounded-lg outline-none bg-[#383838] ' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex-col'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Desciption</h3>
                    <textarea
                    value={description} onChange={(e)=>{setDescription(e.target.value)}}
                     className='w-full px-4 py-2 h-44 rounded-lg bg-[#383838] outline-none' name="" id="" cols="30" rows="10" placeholder='Describe the task...'></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 text-sm mt-4 w-full rounded transistion-all duration-200'>Create Task</button>
                </div>
            </form>
    </div>
  )
}

export default CreateTask