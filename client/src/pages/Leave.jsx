import React, { useCallback, useEffect, useState } from 'react'
import { dummyLeaveData } from '../assets/assets'
import Loading from '../components/Loading'
import { UmbrellaIcon, PalmtreeIcon, ThermometerIcon, Plus } from "lucide-react"
const Leave = () => {
  // 4.29 
  const [leave, setLeave] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const isAdmin = false
  const fetchLeave = useCallback(async () => {
    setLeave(dummyLeaveData)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    fetchLeave()
  }, [fetchLeave])

  if (loading) {
    return <Loading />
  }

  const approvedLeaves = leave.filter((l) => { return l.type === "APPROVED" })
  const sickCount = leave.filter((l) => { return l.type === "SICK" }).length
  const casualCount = leave.filter((l) => { return l.type === "CASUAL" }).length
  const annualCount = leave.filter((l) => { return l.type === "ANNUAL" }).length


  const leaveStats = [
    { label: "Sick Leave", value: sickCount, icon: <ThermometerIcon /> },
    { label: "Casual Leave", value: casualCount, icon: <UmbrellaIcon /> },
    { label: "Annual Leave", value: sickCount, icon: <PalmtreeIcon /> },]
  return (

    <div className='animate-fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 sm:items-center '>
        <div>
          <h1 className=''>Leave Management</h1>
          <p className=''>{isAdmin ? "Manage leave application" : "Your leave history and requests"}</p>
        </div>
        {
          !isAdmin && !isDeleted &&
          <button onClick={()=>{setShowModal(true)}} className='cursor-pointer w-full sm:w-auto flex items-center gap-2 btn-primary justify-center'>
            <Plus className='size-4 '/> Apply For Leave
          </button>
        }
      </div>
      {!isAdmin
     &&  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
{
  leaveStats.map((l)=>{
    return <div key={l.label} className='card card-hover overflow-x-hidden group relative gap-4 p-5 flex items-center'>
      <div className='absolute top-0 left-0  bottom-0 w-1 rounded-r-full bg-slate-500/70 group-hover:bg-indigo-500/70'/>
      <div className='p-3 bg-slate-100 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200 '>
        <div className='text-slate-500 size-5 transition-colors duraation-200 group-hover:text-indigo-500'>
{l.icon}
        </div>
      </div>
      <div>
        <p className='text-sm text-slate-400'>{l.label}</p>
        <p className='text-2xl font-bold text-slate-900 '>{l.value} <span className='font-normal text-sm text-slate-400'>taken</span></p>
      </div>
    </div>
  })
}
      </div>
      }
    </div>
  )
}

export default Leave
