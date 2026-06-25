import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { dummyProfileData } from '../assets/assets'
import { Calendar, DollarSign, FileTextIcon, LayoutGridIcon, LogOut, MenuIcon, Settings, UserIcon, XIcon } from 'lucide-react'
// 1.29.36
const Sidebar = () => {

    const role = "" | "Employee "
    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: <LayoutGridIcon /> },
        role === "ADMIN" ?
            { name: "Employees", href: "/employees", icon: <UserIcon /> } :
            { name: "Attendance", href: "/attendance", icon: <Calendar /> },
        { name: "Leave", href: "/leave", icon: <FileTextIcon /> },
        { name: "Payslip", href: "/payslip", icon: <DollarSign /> },
        { name: "Setting", href: "/setting", icon: <Settings /> },
    ]
    const { pathname } = useLocation()
    const [userName, setUserName] = useState("")
    const [mobileOpen, setMobileOpen] = useState(false)
    useEffect(() => {
        setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName)
    }, [])
    useEffect(() => {
        setMobileOpen(false)
    }, [pathname])
    const handleLogout = () => {
        window.location.href = "/login"
    }


    const sidebarContent = (
        <div className='h-screen '>
            <div className='p-5 border-b border-white/6 '>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center gap-3'>
                        <UserIcon className='text-white size-7 w-full h-full' />
                    </div>
                    <div>
                        <p className='text-white font-semibold text-[13px] '>Empolyee MS</p>
                        <p className='text-[11px] text-slate-500 font-medium'>Management System</p>
                    </div>
                </div>
                <button onClick={() => { setMobileOpen(false) }}
                    className='lg:hidden text-slate-400 hover:text-white p-1'>
                    <XIcon size={20} />
                </button>
            </div>
            {userName && <div className='mx-3 mb-1 p-3 rounded-lg bg-white/3 '>
                <div className='flex items-center gap-3'>
                    <div className='w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink=0 '>
                        <span className='text-slate-400 text-xs font-semibold '>
                            {userName.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <div>
                        <p className='text-[13px] font-medium text-slate-200'>{userName}</p>
                        <p className='text-[11px] text-slate-500'>{role == "ADMIN" ? "Administrator" : "Employee"}</p>
                    </div>
                </div>

            </div>}
            <div className='px-5 pt-5 pb-2'>
                <p className='text-[10px] font-semibold text-slate-500'> Navigation</p>
            </div>
            {/* Naviagtion List  */}
            <div className='flex-1 space-y-1 px-3'>
                {
                    navItems.map((link) => {
                        return <NavLink to={link.href} key={link.name}
                            className={({ isActive }) =>
                                `flex gap-3 px-3 py-2.5 text-[13px] rounded-md font-medium hover:text-white hover:bg-white/10
   ${isActive ? "bg-white/10 text-white" : "text-slate-500"}`
                            }>
                            <span className=''>{link.icon}</span>
                            <p className=' '>{link.name}</p>
                        </NavLink>
                    })
                }
            </div>
            <div className='p-3 border-t border-white/7 mt-auto'>
                <button className='px-3 py-2 w-full bg-rose-500  hover:bg-rose-700 duration-300 transition-colors
    flex gap-3 items-center content-end cursor-pointer rounded-sm font-medium text-[13px]'
                    onClick={handleLogout}>
                    <LogOut />
                    <span> Log out</span>
                </button>
            </div>
        </div>
    )


    return (
        <>
            {/* mobile button */}
            <button onClick={() => { setMobileOpen(true) }} className='lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white 
rounded-lg shadow-lg border border-white/10'>
                <MenuIcon size={20} />
            </button>
            {/* mobile overlay */}
            {mobileOpen && <div onClick={() => { setMobileOpen(false) }} className='lg:hidden fixed inset-0 z-50 backdrop-blur-sm border border-white/10' />}

            {/* aside desktop */}
            <aside className='hidden lg:flex flex-col h-full w-65 text-white shrink-0 border border-white/10 bg-linear-to-b from-slate-900 to-slate-950'>
                {sidebarContent}
            </aside>

            {/* aside mobile */}
            <aside className={`lg:hidden fixed w-72
     text-white shrink-0 border border-white/10
      bg-linear-to-b from-slate-900 to-slate-950 z-50 flex flex-col transform transition-transform duration-300 inset-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} `}>
                {sidebarContent}
            </aside>
        </>
    )
}

export default Sidebar
