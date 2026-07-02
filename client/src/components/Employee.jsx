import React, { useCallback, useEffect, useState } from 'react'
import { dummyEmployeeData, DEPARTMENTS } from '../assets/assets'
import { Plus, Search, X } from 'lucide-react'
import Loading from './Loading'
import EmployeeCard from './EmployeeCard'
const Employee = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [search, setSearch] = useState("")
  const [edit, setEdit] = useState(null)
  const [showCreateModal, setShowCreateModal] = useState(true)
  const fetchEmployees = useCallback(async () => {
    setLoading(true)
    setEmployees(dummyEmployeeData.filter((emp) => selectedDepartment ? emp.department == selectedDepartment : emp))
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  useEffect(() => {
    fetchEmployees()
  }, [])
  console.log(employees);

  const filtered = employees.filter((emp) => `${emp.firstName} ${emp.lastName} ${emp.position}`.toLowerCase().includes(search.toLowerCase()))


  if (loading) {
    return <Loading />
  }
  return (
    <div className='animate-fade-in'>
      {/* header */}
      <div className='flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4 mb-6'>
        <div>
          <h1 className='page-title'>Employess</h1>
          <p className='page-subtitle'>Manage Your Team Members </p>
        </div>
        <button onClick={(e) => { setShowCreateModal(true) }} className='btn-primary flex items-center justify-center gap-3 w-full sm:w-auto'>
          <Plus /> Add Employee
        </button>
      </div>
      {/* serach */}
      <div className='flex flex-col sm:flex-row gap-3 mb-3'>
        <div className='relative flex-1'>
          <Search className="absolute transform -translate-y-1/2 top-1/2 left-3.5 w-4 h-4" />
          <input type="search" placeholder='Search employee......'
            onChange={(e) => { setSearch(e.target.value) }}
            value={search}
            className='w-full pl-10' />
        </div>
        <select className='max-w-40' value={selectedDepartment}
          onChange={(e) => { setSelectedDepartment(e.target.value) }}>
          <option value="">All Departments</option>
          {DEPARTMENTS.map((department) => {
            return <option key={department} value={department}>{department}</option>
          })}
        </select>
      </div>
      {/* employee cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 '>
        {
          filtered.length === 0 ? (<div className='col-span-full text-slate-400 text-center py-16 bg-white rounded-2xl border border-slate-200'>
            No Employees Found
          </div>) : filtered.map((emp) => {
            return <EmployeeCard key={emp.id} employee={emp} onDelete={fetchEmployees} onEdit={(emp) => { setEdit(emp) }} />

          })

        }

      </div>
      {showCreateModal && <div onClick={() => { setShowCreateModal(false) }} className='fixed bg-black/40 backdrop-blur-sm inset-0 z-50 flex items-start justify-center'>

        <div onClick={(e) => { e.stopPropagation() }} className='relative bg-white rounded-2xl shadow-2xl my-8 animate-fade-in max-w-3xl w-full'>
          <div className='flex items-center justify-between bg-amber-200 p-6 pb-0 '>
            <div>
              <h1 className='text-slate-900 text-lg font-semibold '>Add New Employee</h1>
              <p className='text-slate-500 text-sm'>Create a user account and Employee profile </p>
              <button onClick={(e) => { setShowCreateModal(false) }}
                className='text-slate-400 p-2 rounded-lg hover:bg-slate-100 hover:text-slate-600 transition-colors duration-200 '>
                <X className='h-5 w-5 ' />
              </button>
            </div>
            <div>
form
            </div>
          </div>
        </div>
      </div>}
            {edit && <div onClick={() => { setEdit(null) }} className='fixed bg-black/40 backdrop-blur-sm inset-0 z-50 flex items-start justify-center'>

        <div onClick={(e) => { e.stopPropagation() }} className='relative bg-white rounded-2xl shadow-2xl my-8 animate-fade-in max-w-3xl w-full'>
          <div className='flex items-center justify-between bg-amber-200 p-6 pb-0 '>
            <div>
              <h1 className='text-slate-900 text-lg font-semibold '>Edit Employee</h1>
              <p className='text-slate-500 text-sm'>Edit Empolyee </p>
              <button onClick={() => { setEdit(null) }}
                className='text-slate-400 p-2 rounded-lg hover:bg-slate-100 hover:text-slate-600 transition-colors duration-200 '>
                <X className='h-5 w-5 ' />
              </button>
            </div>
            <div>
form
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Employee
