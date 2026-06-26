import { ArrowRightIcon, CalendarIcon, DollarSignIcon, FileTextIcon} from 'lucide-react';
import React from 'react'
import {Link} from "react-router-dom"

const EmployeeDashboard = ({ data }) => {
    console.log(data);

    const emp = data.employee;
    const cards = [
        {
            icon: <CalendarIcon />,
            value: data.currentMonthAttendance,
            title: "Days Present",
            subtitle: " This Month"
        },
        {
            icon: <FileTextIcon />,
            value: data.pendingLeaves,
            title: "pending Leaves",
            subtitle: " Awaiting approval"
        },
        {
            icon: <DollarSignIcon />,
            value: data.latestPayslip ? `$${data.latestPayslip.netSalary?.toLocaleString()}` : "N/A",
            title: "Latest Payslip",
            subtitle: "Most resent payout"
        }
    ]

    return (
        <div className='animate-fade-in'>
            <div className='page-header'>
                <h1 className='page-title'>Welcome, {emp?.firstName}</h1>
                <p className='page-subtitle'>
                    {emp?.position} - {emp?.department || "No Department"}
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8'>
                {
                    cards.map((card, index) => {
                        return <div key={index} className='card card-hover p-5 sm-p-6 flex 
                        justify-between items-center relative overflow-hidden group'>
                           <div>

                            <div className='absolute top-0 left-0 bottom-0 w-1 rounded-r-full bg-slate-500/70 group-hover:bg-indigo-500/70'>
                            </div>
                                
                                <p className='text-sm font-medium text-slate-700 mt-1 '>{card.title}</p>
                                <p className='text-2xl font-bold text-slate-900'>{card.value}</p>
                           </div>
                            <div className=''>
<div className="size-10 p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300 ">
    {card.icon}
</div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='flex flex-col sm:flex-row gap-3'>
                <Link to={"/attendance"} className="btn-primary text-center
                inline-flex items-center justify-center gap-2">
                    Mark Attendance <ArrowRightIcon className='size-4'/>
                </Link>
                <Link to={"leave"} className="btn-secondry text-center">
                Apply for Leave</Link>
            </div>
        </div>
    )
}

export default EmployeeDashboard
