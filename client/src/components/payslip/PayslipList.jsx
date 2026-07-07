import { format } from 'date-fns'
import React from 'react'
import {Download} from "lucide-react"
const PayslipList = ({payslips,isAdmin}) => {



  return    <div className='card overflow-hidden'>
        <div className='overflow-x-auto'>
            <table className='table-modern'>
                <thead>
                    <tr>
                        {isAdmin && <th>Employee</th>}
                        <th>Period</th>
                        <th>Basic Salary</th>
                        <th>Net Salary</th>
                        <th>Status</th>
                         <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payslips?.length == 0 ? (<tr className='text-slate-500 py-12'>
                        <td colSpan={isAdmin ? 5 : 4}>
                            No payslips Found
                        </td>
                    </tr>) : (payslips.map((payslip) => {
                        return <tr key={payslip._id || payslip.id} >
                            {isAdmin &&
                                <td className='text-slate-900'>
                                    {payslip.employee?.firstName}
                                    {payslip.employee?.lastName}
                                </td>
                            }
                            <td className='text-slate-500'>
                            {format (new Date(payslip.year,payslip.month - 1),"MMM yyyy")}                          </td>
                            <td className=' text-slate-500'>{payslip.basicSalary?.toLocaleString()}</td>
                            <td className=' text-slate-800'>{payslip.netSalary?.toLocaleString()}</td>
                            <td className=' text-center'>
                                <button 
                                onClick={()=>{
                                    window.open(`/print/payslip/${payslip.id||payslip._id}`)
                                }}
                                className='inline-flex items-center px-3 py-1.5 text-xs font-medium
                                rounded text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors'>
                                    <Download className="size-4"/>
                                     Download
                                     </button>
                                     </td>
                        </tr>
                    }))}
                </tbody>
            </table>
        </div>

    </div>
}

export default PayslipList
