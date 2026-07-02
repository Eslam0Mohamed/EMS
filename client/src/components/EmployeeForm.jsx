import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DEPARTMENTS } from '../assets/assets'
import { Loader2Icon } from 'lucide-react'

const EmployeeForm = ({ initialData, onSuccess, onCancel }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState()
    const editMode = !!initialData
    const handlSubmit = (e) => {
        e.preventDefualt()
    }
    return (
        <form className='max-w-3xl animate-fade-in space-y-6 overflow-y-scroll' onSubmit={handlSubmit}>

            <div className='card p-5'>
                <h3 className='font-medium mb-6 p-4 border border-slate-100'>Personel Information</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700'>
                    <div>
                        <label htmlFor="firsName" className='mb-2 block'>First Name</label>
                        <input type="text" name="firsName" id="firsName" required defaultValue={initialData?.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastName" className='mb-2 block'>Last Name</label>
                        <input type="text" name="lastName" id="lastName" required defaultValue={initialData?.lastName} />
                    </div>
                    <div>
                        <label htmlFor="phone" className='mb-2 block'>Phone</label>
                        <input type="text" name="phone" id="phone" required defaultValue={initialData?.phone} />
                    </div>
                    <div>
                        <label htmlFor="joinDate" className='mb-2 block'>Join Date</label>
                        <input type="text" name="joinDate" id="joinDate" required
                            defaultValue={initialData?.joinDate ? new Date(initialData?.joinDate).toLocaleDateString() : ""} />
                    </div>
                    <div>
                        <label htmlFor="bio" className='mb-2 block'>Bio (optional)</label>
                        <textarea type="text" name="bio" id="bio"
                            defaultValue={initialData?.bio} className='resize-none col-span-full' placeholder='Brief Description.......' />
                    </div>
                </div>
            </div>
            <div className="card pb-5">
                <h3 className='font-medium mb-6 p-4 border border-slate-100'>Employment Details</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700'>
                    <div>
                        <label htmlFor="department" className='mb-2 block'>Department</label>
                        <select name="department" id="department" defaultValue={initialData?.department || ""}>
                            <option value="">Select Department</option>
                            {DEPARTMENTS.map((dep) => {
                                return <option key={dep} value={dep}>{dep}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="position" className='mb-2 block'>Position</label>
                        <input type="text" name="position" id="position" required
                            defaultValue={initialData?.position} />
                    </div>
                    <div>
                        <label htmlFor="basicSalary" className='mb-2 block'>Basic Salary</label>
                        <input type="number" name="basicSalary" id="basicSalary" required
                            defaultValue={initialData?.basicSalary || 0} />
                    </div>
                    <div>
                        <label htmlFor="allownces" className='mb-2 block'>Allownces</label>
                        <input type="number" name="allownces" id="allownces" required
                            defaultValue={initialData?.allownces || 0} />
                    </div>
                    <div>
                        <label htmlFor="deductions" className='mb-2 block'>Deductions</label>
                        <input type="number" name="deductions" id="deductions" required
                            defaultValue={initialData?.deductions || 0} />
                    </div>
                    {editMode && <div>
                        <label htmlFor="status" className='mb-2 block'>Status</label>
                        <select  name="status" id="status" defaultValue={initialData?.employmentStatus}>
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">In Active</option>
                        </select>
                    </div>}

                </div>
            </div>
            <div className='card p-5'>
                <h3 className='text-base font-medium mb-6 p-4 border border-slate-100'>Account Setup</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700'>
                    <div className='sm:col-span-2'>
                        <label htmlFor="firsName" className='mb-2 block '>Work Email</label>
                        <input type="email" name="email" id="email" required defaultValue={initialData?.email} />
                    </div>
                    {!editMode && <div>
                        <label htmlFor="password" className='mb-2 block'>Temporary Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>}
                    {editMode && <div>
                        <label htmlFor="password" className='mb-2 block'>Change Password (optional)</label>
                        <input type="password" name="password" id="password" placeholder={"Leave Blank if you want current"} />
                    </div>}
                    <div>
                        <label htmlFor="role" className='mb-2 block'>System role</label>
                        <select name="role" id="role" defaultValue={initialData?.user.role}>
                            <option value="EMPLOYEE">Employee</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>


                </div>
            </div>
            <div className='flex flex-col-reverse sm:flex-row  justify-end items-center gap-4'>
                <button type="button" className="btn-secondary cursor-pointer" onClick={onCancel}>cancel</button>
                <button type="submit" className="btn-primary flex items-center justify-center cursor-pointer" >
                    {loading&&<Loader2Icon className="animate-spin"/> }
                    {editMode?"Update Employee":"Create Employee"}
                </button>
            </div>
        </form>
    )
}

export default EmployeeForm
