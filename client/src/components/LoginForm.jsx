import { Link } from 'react-router-dom'
import LoginLeftSide from './LoginLeftSide'
import { ArrowLeft, EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from "react-hook-form"

const LoginForm = ({ role, title, subtitle }) => {

    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(true)

     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='flex flex-col md:flex-row min-h-screen '>
            <LoginLeftSide />
            <div className='flex-1 flex items-center justify-center p-6 sm:p-12 bg-white'>
                <div className='w-full max-w-md animate-fade-in '>
                    <Link to={"/login"} className='inline-flex items-center gap-2
                 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors '>
                        <ArrowLeft size={16} /> Back to portal
                    </Link>
                    <div className='mb-8'>
                        <h1 className='text-2xl sm:text-3xl text-zinc-800 font-medium'>{title}</h1>
                        <p className='text-slate-500 text-sm mt-2'>{subtitle}</p>
                    </div>
                    {error && (<div className='mb-4 bg-rose-50 border border-rose-200 text-rose-700
                    rounded-xl flex items-start gap-2 '>
                        {error}
                    </div>)}


                    <form className='space-y-2' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium mb-2 text-slate-700'>Email Address</label>
                            <input type="email" {...register("email")} id="email" placeholder='ahmed@email.com' />
                        </div>
                        <div>
                            <label htmlFor="password" className='block text-sm font-medium mb-2 text-slate-700'>Password</label>

                            <div className='relative'>
                                <input type={`${showPassword?"text":"password"}`} {...register("password")} id="password" placeholder='........ ' required />
                                <button type='button' className='absolute top-2 right-2 cursor-pointer' 
                                onClick={()=>{setShowPassword(!showPassword)}}>
                                    {showPassword?<EyeOffIcon/>:<EyeIcon/>}
                                </button>
                            </div>
                        </div>
                        <button className='text-white bg-linear-to-r from-indigo-400 to-indigo-600 font-medium 
                        py-3 px-2  w-full mt-6 rounded-md cursor-pointer hover:to-indigo-400 hover:from-indigo-700
                        transition-colors duration-200 shadow-lg'>
                            {loading&&<Loader2Icon className="animate-spin mr-4 size-4"/>} Sign in
                        </button>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default LoginForm
