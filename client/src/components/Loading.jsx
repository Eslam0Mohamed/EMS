import React from 'react'

const Loading = () => {
    return (
        <div className='flex flex-col gap-8 justify-center items-center h-screen'>
            <div className='animate-spin size-10 rounded-full border-3 border-indigo-600 border-t-transparent'>
            </div>
            <p className='text-md'>Loading</p>
        </div>
    )
}

export default Loading
