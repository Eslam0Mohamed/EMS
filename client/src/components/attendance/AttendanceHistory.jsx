import React from 'react'
import { getDayTypeDisplay, getWorkingHoursDisplay } from '../../assets/assets'
import { format } from "date-fns"
const AttendanceHistory = ({ history }) => {
  return (
    <div className='card overflow-hidden'>
      <div className='px-6 py-4 border border-slate-400 '>
        <h2 className='font-semibold text-slate-900'>Recent Activity</h2>
      </div>
      <div className='overflow-x-auto'>
        <table className='table-modern'>
          <thead>
            <tr>
              <th>Data</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Working Hours</th>
              <th>Day Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history?.length == 0 ? (<tr className='text-slate-500 py-12'>
              <td colSpan={6}>
                No Records Found
              </td>
            </tr>) : (history.map((record) => {
              const dayType = getDayTypeDisplay(record)
              return <tr key={record._id} >
                <td className='px-6 py-4 font-medium text-slate-900'>{format(new Date(record.date), "MMM dd,yyyy")}</td>
                <td className='px-6 py-4 font-medium text-slate-900'>{record.checkIn ? format(new Date(record.checkIn), "hh:mm a") : "-"}</td>
                <td className='px-6 py-4 font-medium text-slate-900'>{record.checkOut ? format(new Date(record.checkOut), "hh:mm a") : "-"}</td>
                <td className='px-6 py-4 font-medium text-slate-900'>{getWorkingHoursDisplay(record)}</td>
                <td className='px-6 py-4 '>{dayType!=="-" ? <span className={`badge ${dayType.className}`}>{dayType.label}</span> :"-"}</td>
                <td className='px-6 py-4 '>{
          <span className={`badge ${record.status == "PRESENT" ? "badge-success" : record.status == "LATE"? "badge-warning":"badge-danger"}`}>
            {record.status}
            </span>}</td>
              </tr>
            }))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AttendanceHistory
