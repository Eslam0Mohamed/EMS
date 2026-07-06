import React, { useState } from 'react'
import { format } from 'date-fns'
import { Check, Loader2, X } from 'lucide-react'

const LeaveHistory = ({ leave, isAdmin, onUpdate }) => {

    const [processing, setProcessing] = useState(null)

    const handleProcessing = async (id, status) => {
        setProcessing(id)
    }

    return <div className='card overflow-hidden'>
        <div className='overflow-x-auto'>
            <table className='table-modern'>
                <thead>
                    <tr>
                        {isAdmin && <th>Employee</th>}
                        <th>Type</th>
                        <th>Dates</th>
                        <th>Reason</th>
                        <th>Status</th>
                        {isAdmin && <th className='text-center'>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {leave?.length == 0 ? (<tr className='text-slate-500 py-12'>
                        <td colSpan={isAdmin ? 6 : 4}>
                            No Records Found
                        </td>
                    </tr>) : (leave.map((leave) => {
                        return <tr key={leave._id || leave.id} >
                            {isAdmin &&
                                <td className='text-slate-900'>
                                    {leave.employee?.firstName}
                                    {leave.employee?.lastName}
                                </td>
                            }
                            <td className='px-6 py-4 font-medium text-slate-900'><span className='badge bg-slate-100 text-slate-600'>{leave.type}</span></td>
                            <td className='px-6 py-4 font-medium text-slate-900'>{format(new Date(leave.startDate), "MMM dd")} - {format(new Date(leave.endDate), "MMM dd")}</td>
                            <td className='px-6 py-4 font-medium text-slate-900'>{leave.reason}</td>
                            <td className=''>
                                <span className={`badge ${leave.status === "APPROVED" ?
                                    "badge-success" : leave.status === "REJECTED" ? "badge-danger" : "badge-warning"}`}>
                                    {leave.status}
                                </span></td>
                            {isAdmin &&
                                <td className='px-6 py-4 '>
                                    {leave.status == "PENDING" && (<div className='flex justify-center gap-4'>
                                        <button
                                        onClick={()=>{handleProcessing(leave.id || leave._id , "APPROVED")}}
                                        disabled={!!processing}
                                        className='p-1.5 rounded-md bg-emerald-50
                                         text-emerald-600 hover:bg-emerald-100 transition-colors duration-200 cursor-pointer
                                         '>
                                            {processing === (leave._id || leave.id) ? <Loader2 className='animate-spin size-4' /> : <Check className='size-4' />}
                                        </button>
                                        <button 

                                        onClick={()=>{handleProcessing(leave.id || leave._id , "REJECTED")}}
                                        disabled={!!processing}
                                        className='p-1.5 rounded-md bg-rose-50
                                         text-rose-600 hover:bg-rose-100 transition-colors duration-200 cursor-pointer
                                         '>
                                            {processing === (leave._id || leave.id) ? <Loader2 className='animate-spin size-4' /> : <X className='size-4' />}
                                        </button>
                                    </div>)}
                                </td>
                            }
                        </tr>
                    }))}
                </tbody>
            </table>
        </div>

    </div>
}

export default LeaveHistory
