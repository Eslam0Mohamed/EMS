import {Link} from 'react-router-dom'
import LoginLeftSide from '../components/LoginLeftSide'
import {ArrowRight, ShieldIcon,UserIcon} from "lucide-react"
const LoginLanding = () => {
  const loginPortal = [
    {
      to:"login/admin",
      title:"Admin Portal",
      description:"manage your employees, departments, payroll and system configration"
      ,Icon:ShieldIcon
    },
       {
      to:"login/employee",
      title:"Employee Portal",
      description:"View your profile, track attendance request time off and access payslip"
      ,Icon:UserIcon
    }
  ]
  return (
          <div className='min-h-screen flex flex-col md:flex-row'>
            <LoginLeftSide />
            <div className='w-full md:w-1/2 flex flex-col justify-center 
      items-center p-6 sm:p-12 lg-p-16 min-h-screen overflow-auto'>

                <div className='w-full max-w-md animate-fade-in relative z-10'>
                    <div className='mb-10 text-center md:text-left'>
                        <h2 className='text-3xl font-medium text-slate-900 mb-3'>Welcome back</h2>
                        <p className='text-slate-500'>Select you portal to securely access the system.</p>
                    </div>
                    <div>
                      {loginPortal.map((portal)=>(
                        <Link key={portal.to} to={portal.to}
                        className='group block bg-slate-50 p-6 mb-4
                        rounded-xl hover:bg-indigo-50 hover:indigo-400 transition-all duration-300'>
                          <div className='flex justify-between items-center gap-4'>
                            <h3 className='group-hover:text-indigo-400 transition-colors text-lg text-slate-800 '>{portal.title}</h3>
                            <ArrowRight/>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <p>{new Date().getFullYear()} © Eslam. All rights reserved.</p>
                </div>
            </div>
        </div>
  )
}

export default LoginLanding
