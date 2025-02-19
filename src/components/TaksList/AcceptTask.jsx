import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { toast } from "react-toastify";

const AcceptTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  // Handling Mark as Complete
  function HandleComplete() {
    const updateUserData = [...userData]; // Create a copy to avoid direct mutation

    // Find the employee who has this task
    updateUserData.forEach((employee) => {
      const taskIndex = employee.tasks.findIndex(function(task){
        return task.title === data.title
      });

      if (taskIndex !== -1) {
        // Update the task status
        employee.tasks[taskIndex] = {
          ...employee.tasks[taskIndex], // Keep remaining properties unchanged
          active: false,
          completed: true,
        };
        employee.taskNumbers.completed += 1;
        toast.success("Task Completed Successfully");
      }
    });

    // Update global state to trigger re-render
    setUserData(updateUserData);
  }

  // Handling Mark as Failed
  function HandleFailed() {
    const updateUserData = [...userData];

    updateUserData.forEach((emp) => {
      const taskIndex = emp.tasks.findIndex((task) => task.title === data.title);

      if (taskIndex !== -1) {
        emp.tasks[taskIndex] = {  
          ...emp.tasks[taskIndex],
          active: false,
          failed: true,
        };
        emp.taskNumbers.failed += 1;
        toast.error("Task Failed");
      }
    });

    setUserData(updateUserData);
  }

  return (
    <div className="flex-shrink-0 w-[300px] bg-[#1e1e1e] border-2 border-yellow-900 rounded-xl p-5 hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-center">
        <h3 className="px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-lg text-sm font-medium">{data.category}</h3>
        <h4 className="text-sm text-gray-400">{data.date}</h4>
      </div>
      <h2 className="mt-4 text-lg font-semibold text-gray-100">{data.title}</h2>
      <p className="mt-2 text-sm text-gray-300">{data.description}</p>
    
    <div className="flex justify-between mt-4">
        {data.completed ? (
            <CompleteTask />
        ) : data.failed ? (
            <FailedTask />
        ) : (
            <>
            <button
                onClick={HandleComplete}
                className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-2 text-sm rounded-lg transistion-all duration-200"
            >
                Mark as Completed
            </button>
            <button
                onClick={HandleFailed}
                className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-2 text-sm rounded-lg transistion-all duration-200"
            >
                Mark as Failed
            </button>
            </>
        )}
    </div>
   </div> 
  );
};

export default AcceptTask;
