import Sidebar from '../components/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30'>
<Sidebar/>
      <main className='flex-1'>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout
