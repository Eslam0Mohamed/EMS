import { Loader2, Plus, X } from 'lucide-react'
import React, { useState } from 'react'

const GeneratePayslipForm = ({ employees, onSuccess }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefualt()
    }
    if (!isOpen) {
        return <button
            onClick={() => { setIsOpen(true) }}
            className='btn-primary gap-2 flex 
    items-center'><Plus className='size-4' />
            Generate Payslip</button>
    }
    return (
        <div className='fixed inset-0 bg-black/40 backdrop-blur-sm
    flex items-center justify-center z-50 p-4 '>
            <div className='card max-w-2xl p-6 animate-slide-up'>
                <div className=' flex justify-between mb-3 items-center'>
                    <h3>Generate Monthly Payslip
                    </h3>
                    <button
                        onClick={() => { setIsOpen(false) }}
                        className='text-slate-400 hover:text-slate-600 p-1'>
                        <X size={20} />
                    </button>
                </div>
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <div>
                        <label className='block text-sm font-medium text-slate-700 mb-2 '>
                            Employee
                        </label>
                        <select required name="
        employeeId" id="employeeId">
                            {employees.map((e) => {
                                return <option value={e.id} key={e.id}>
                                    {e.firstName} {e.lastName} {e.position}
                                </option>
                            })}

                        </select>
                    </div>

                    <div className='grid grid-cols-2 gap-4 my-3'>
                        <div>
                            <label className='block text-sm font-medium text-slate-700 mb-2'>
                                Month
                            </label>
                            <select required name="month" id="month">
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => {
                                    return <option value={m} key={m}>{m}</option>
                                })}
                            </select>

                        </div>
                        <div>
                            <label className='block text-sm font-medium text-slate-700 mb-2'>
                                Year
                            </label>
                            <input type="date" name="year" id="year" defaultValue={new Date().getFullYear()} />

                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-slate-700 mb-2'>
                            Basic Salary
                        </label>
                        <input type="number" name="basicSalary" placeholder='5000' />

                    </div>

                    <div className='grid grid-cols-2'>
                        <div>
                            <label className='block text-sm font-medium text-slate-700 mb-2'>
                                Allownces
                            </label>
                            <input type="number" name="allownces" defaultValue={0} />

                        </div>
                        <div>
                            <label className='block text-sm font-medium text-slate-700 mb-2'>
                                Deductions
                            </label>
                            <input type="number" name="deductions" defaultValue={0} />

                        </div>
                    </div>
                    <div className='flex justify-end gap-3 pt-3'>
                        <button  className='btn-secondary' type="button" onClick={() => { setIsOpen(false) }}>Cancel</button>
                        <button   className='btn-primary flex items-center' type='submit'>
                           {loading&&<Loader2 className='size-4 animate-spin'/>} Generate
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GeneratePayslipForm
