import { FileText, X, Loader2, Send, Calendar } from 'lucide-react'
import React, { useState } from 'react'

const ApplyLeaveModal = ({ open, onClose, onSuccess }) => {
    const [loading, setLoading] = useState(false)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    const minDate = tomorrow.toISOString().split("T")[0]
    const handleSubmit = async (e) => {
        e.preventDefualt()
    }

    if (!open) {
        return null
    }
    return (

        <div className='fixed inset-0 z-50 flex items-center justify-center 
    p-4 bg-black/40 backdrop-blur-sm' onClick={onClose}>
            <div className='bg-white relative rounded-2xl shadow-2xl w-full max-w-lg animate-fade-in' onClick={(e) => { e.stopPropagation() }}>
                <div className='flex items-center justify-between p-6 pb-0  '>
                    <div >
                        <h2 className='text-lg font-semibold text-slate-800'>Apply for Leave</h2>
                        <p className='text-sm  text-slate-400'>Submit your leave request for abbroval</p>
                    </div>
                    <button onClick={onClose}
                        className='
                    p-2 rounded-lg bg-slate-100 transition-colors
                     duration-200 text-slate-400 hover:text-slate-600'>
                        <X className='size-5' />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className='p-6'>
                    <div className='mb-2'>
                        <label htmlFor="type" className='flex items-center gap-2 font-medium text-slate-700 mb-2'>
                            <FileText className='size-4 text-slate-400' />
                            Leave Type
                        </label>
                        <select name="type" id="type" required>
                            <option value="SICK">Sick Leave</option>
                            <option value="CASUAL">Casual Leave</option>
                            <option value="ANNUAL">Annual Leave</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="type" className='flex items-center gap-2 font-medium text-slate-700 mb-1'>
                            <Calendar className='size-4 text-slate-400' />
                            Duration
                        </label>
                        <div className='grid grid-cols-2 gap-4 '>
                            <div>
                                <span className='text-xs text-slate-400 mb-1'>From</span>
                                <input type="date" name='startDate' required min={minDate} />
                            </div>
                            <div>
                                <span className='text-xs text-slate-400 mb-1'>To</span>
                                <input type="date" name='endDate' required min={minDate} />
                            </div>

                        </div>
                    </div>
                    <div>

                        <label htmlFor="reason" className='flex items-center gap-2 font-medium text-slate-700 mb-2'>
                            {/* <FileText className='size-4 text-slate-400' /> */}
                            Reason
                        </label>
                        <textarea
                            placeholder='Briefly descripe why you need this leave...'
                            name="reason" id="reason" required rows={3}></textarea>
                    </div>
                    <div className='flex gap-3 pt-2'>
                        <button onClick={onClose} type='button'
                            className='btn-secondry flex-1'>Cancel</button>
                        <button onClick={handleSubmit} disabled={loading} type='submit'
                            className='btn-primary flex-1 flex gap-2 items-center justify-center'>
                            {loading ? <Loader2 className='size-4 animate-spin ' /> : <Send className='size-4' />}
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ApplyLeaveModal
