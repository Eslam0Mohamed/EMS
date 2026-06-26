import React from 'react'

const Loading = () => {
    return (
        <div className='flex flex-col gsp-8  justify-center items-center h-screen'>
            <div className='animate-spin size-10    rounded-full border-2 border-indigo-600 border-t-trsnsparent'>
            </div>
            <p className='text-md'>Loading</p>
        </div>
    )
}

export default Loading
