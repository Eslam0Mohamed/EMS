import { LockIcon, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
// 6:6
const ChangePassword = ({ open, onClose }) => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ type: "", text: "" })
    if (!open) {
        return null
    }
    return (
        <div onClick={onClose} className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <div className='absolute inset-0 bg-black/40 backdrop-blur-sm ' />
            <div className='relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-fade-in' onClick={(e) => { e.stopPropagation }}>
                <div className='flex items-center justify-between p-6 pb-0'>
                    <h2 className='text-lg font-medium text-slate-900 flex items-center gap-2'>
                       <LockIcon className='size-5 text-slate-400'/> Change Password</h2>
               <button><X onClick={onClose} className='size-5 text-slate-400 rounded-lg p-2 hover:bg-slate-100 hover:text-slate-600'/></button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
