import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { ToastContainer, toast } from 'react-toastify';



const App = () => {

  const[user, setUser] = useState(null)
  const[loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)
  // console.log(authData)

  //function to preventing to get logged out if user press reload

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')  //this brings the data of either emp or admin
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)  //parse converts string into object
      setUser(userData.role)   //role again reset to what it is in logged in user or to keep updating state with role when reloaded to not get logged out
      setLoggedInUserData(userData.data) 
    }
  },[])
  
// useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(JSON.parse(loggedInUser).role)
  //     }
  //   }
  // }, [authData])
  
  function handleLogin(email, password) {
    // if (!authData || !authData.employees) {
    //     alert("Auth data not loaded yet! Try again.");
    //     return;
    // }

    if (email === 'admin@example.com' && password === '123') {
        setUser('admin');
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
        toast.success('Welcome back Admin');
    } else if (userData) {
        const employee =  userData.find((e) => email === e.email && password === e.password) //mathched employee iobject will get stored in employee variable
        if(employee){
          setUser('employee');
          localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:employee})); //did this to keep user logged in see above useEffect code
          setLoggedInUserData(employee); // Store full data in state
          toast.success(`Welcome back ${employee.firstName}`);
        }
        
    } else {
        alert("Invalid credentials");
    }
}


  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user === 'admin' ? <AdminDashboard changeUser={setUser}/> : user === 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : null}

    </>
  )
}

export default App

