import { Loader2Icon, LockIcon, X } from 'lucide-react'
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
                        <LockIcon className='size-5 text-slate-400' /> Change Password</h2>
                    <button><X onClick={onClose} className='size-5 text-slate-400 rounded-lg p-2 hover:bg-slate-100 hover:text-slate-600' /></button>
                </div>
                <form className='p-6 space-y-5' >
                    <div className={`p-3 rounded-xl text-sm flex items-start
                    gap-3 ${message.type == "success" ? "bg-emerald-50 text-rose-700 border border-emerald-200" : "bg-rose-50 text-rose-700 border border-rose-200"}`}>
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${message.text == "success" ? "bg-emerald-500" : "bg-rose-500"}`} />
                        {message.text}
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-slate-700'>Current Password</label>
                        <input type="password" bame="currentPassword" required />
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-slate-700'>New Password</label>
                        <input type="password" bame="newPassword" required />
                    </div>
                    <div className='flex gap-3 pt-2'>
                        <button type='button' onClick={onClose}
                            className='btn-secondary flex-1'>
                            Cancel
                        </button>
                        <button type='submit' onClick={onClose}
                            className='btn-primary flex-1 justify-center '>
                            {loading && <Loader2Icon className='size-4 animate-spin' />}
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword
