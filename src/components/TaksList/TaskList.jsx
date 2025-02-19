import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] w-full py-5 px-5 bg-[#1e1e1e] mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto rounded-xl'>
        {data.tasks.map((elem,idx)=>{ // elem represents every object in tasks array or represents every task in data
            if(elem.active){ //returns boolean true/false
                return <AcceptTask key={idx} data={elem} />
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }
        })}
    </div>
  )
}

export default TaskList