import React, { useState } from 'react'
import { toast } from 'react-toastify'
import './Login.css' // Import the CSS file for styling

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submitHandler(e) {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
        // toast.success('Logged In Successfully')
    }

    return (
        <div className='login-background'> {/* Add the class for background */}
            <div className='flex h-screen w-screen items-center justify-center bg-[#0a0a0a]'>
                <div className='bg-[#1e1e1e] shadow-xl rounded-2xl p-12 w-full max-w-md'>
                    <h2 className='text-3xl font-bold text-center mb-8 text-gray-100'>Welcome to SnapTask!</h2>
                    <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 mb-4 transition-all text-white'
                            type="email"
                            placeholder='Enter your email'
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 mb-6 transition-all text-white'
                            type="password"
                            placeholder='Enter your password'
                        />
                        <button className='w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
