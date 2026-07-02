import { Pencil, Trash } from 'lucide-react';
import React from 'react'

const EmployeeCard = ({ employee, onDelete, onEdit }) => {

 const handleDelete = async()=>{
if (!confirm("Are you sure you want to delete this employee")) {
    return 
}
    }
    return (
        <div className='card card-hover relative  group overflow-hidden'>
            <div className='px-5 py-6 my-6'>
                <h3 className='text-slate-900'>{employee.firstName} {employee.lastName}</h3>
                <p className='text-slate-400 text-xs'>{employee.position} </p>
            </div>
            <div className="absolute top-4 left-4 flex gap-2" >
                <span className='text-sm font-semibold text-slate-400 
        bg-white/90 backdrop-blur-md px-2 py-1'>{employee.department}</span>

                {

                    employee.isDeleted && <span className='text-sm font-medium text-white 
        bg-red/60 px-2 py-1'>Delete</span>
                }

            </div>
            {
                !employee.isDeleted && <div className='px-5 pb-2 flex gap-4'>
                    <button onClick={onEdit(employee)} className='text-slate-600 rounded-xl bg-white/90 p-2.5 shadow-lg hover:text-slate-900 transition-all duration-200 '>
                        <Pencil />
                    </button>
                    <button onClick={handleDelete} className='text-slate-600 rounded-xl bg-white/90 p-2.5 shadow-lg hover:text-rose-500 transition-all duration-200 '>
                        <Trash />
                    </button>

                </div>
            }
            
        </div>
    )
}

export default EmployeeCard
