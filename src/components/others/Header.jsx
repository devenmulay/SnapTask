import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"; // Logout icon

const Header = (props) => {
  // const[username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }
  function logoutUser(){
    localStorage.setItem('loggedInUser','')
    props.changeUser('') //did this to set state variable user empty so non need to reload like below, like we have written in app.jsx that when user = empty show login page
    // window.location.reload()
    toast.success('Successfully logged out!')
  }

  return (
    <div className='flex items-end justify-between bg-[#1e1e1e] p-6 rounded-xl shadow-md shadow-black/10'>
        <h1 className='text-gray-300 font-medium text-lg'>Hello,<br /> <span className='text-3xl font-semibold text-white'> {props.data?.firstName ? props.data.firstName : "Admin"}👋🏻</span></h1>
        <button onClick={logoutUser} className=' hover:bg-[#383838] text-white rounded-lg px-6 py-2 font-medium transition-all duration-200'>
        <FontAwesomeIcon icon={faRightFromBracket} className="w-5 h-5" />
        <div>
          logout
        </div>
        </button>
        
    </div>
  )
}

export default Header