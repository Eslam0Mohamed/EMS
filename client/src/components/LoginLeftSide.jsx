import React from 'react'

const LoginLeftSide = () => {
    return (
        <div className='hidden md:flex bg-indigo-900 relative w-1/2
     border-r border-slate-200 overflow-hidden'>
            <div className='absolute bg-indigo-500/30 top-0 left-0 blur-3xl size-72 rounded-full'> </div>
            <div className='content flex justify-center items-start flex-col p-12 lg:p-20 w-full h-full '>
                <h1 className='text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight '>Employee <br /> Management System</h1>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                    you can manage your employees, attendance, leave, and payslips all in one place. Sign in to access your account and stay organized with our user-friendly interface.
                </p>
            </div>
        </div>
    )
}

export default LoginLeftSide
