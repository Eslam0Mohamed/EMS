import { Loader2Icon, Save, User } from 'lucide-react'
import React, { useState } from 'react'

const ProfileForm = ({initialData,onSuccess}) => {
    console.log(initialData);
    
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const [message,setMessage] = useState('')
 
 const handleSubmit = async(e)=>{
e.preventDefault()
 }
    return (
    <form onSubmit={handleSubmit} className='card p-5 sm:p-6 mb-6'>
      <h2 className='text-base font-medium text-slate-900 mb-6 pb-4 border-b border-slate-100 flex items-center gap-3'><User/> Puplic Profile</h2>
  {error&&<div className='bg-rose-50 text-rose-700 p-4 rounded-xl text-sm border border-rose-200 mb-6 flex items-start ga-3'>
    
    <div className='w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0 '/>
    {error}
    </div>}
  {message&&<div className='bg-emerald-50 text-emerald-700 p-4 rounded-xl text-sm border border-rose-200 mb-6 flex items-start ga-3'>
    
    <div className='w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 '/>
    {message}
    </div>}
    <div className='space-y-5 '>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
    <label className="text-sm font-medium block mb-2">Name</label>
    <input type="text"
    className='bg-slate-50 text-slate-400 cursor-not-allowed'
    disabled value={`${initialData.firstName} ${initialData.lastName}`} name="name"  />
</div>
<div>
    <label  className="text-sm font-medium block mb-2">Email</label>
    <input type="text"
    className='bg-slate-50 text-slate-400 cursor-not-allowed'
    disabled value={`${initialData.email}`} name="email"  />
</div>
<div className='sm:col-span-2'>
    <label  className="text-sm font-medium block mb-2">Position</label>
    <input type="text"
    className='bg-slate-50 text-slate-400 cursor-not-allowed'
    disabled name="position"  />
</div>
<div>
       <label 
       className="text-sm font-medium block mb-2">Bio</label>
 <textarea name="bio"  disabled={initialData.isDeleted} 
 placeholder="Write a brief bio" 
 className={`resize-none ${initialData.isDeleted?"bg-slate-50 text-slate-400 cursor-not-allowed" :""}`}></textarea>
<p className={"text-xs text-slate-400 mt-2"}>This will displayed on your profile.</p>

</div>
</div>
{
    initialData.isDeleted?<div className='pt-2 p-4 bg-rose-50 border border-rose-200 rounded-xl text-center'>
        <p className='text-rose-600 font-medium tracking-tight'>Account Deactivated</p>
        <p className='text-sm text-rose-500 mt-1'>You can no longer update your profile.</p>
    </div>:<div className='flex justify-end '>
        <button type={"submit"} disabled={loading} 
        className='btn-primary flex items-center gap-2 
        justify-center w-full sm:w-auto'>
            {loading?<Loader2Icon className='size-4 animate-spin '/>:<Save/>}
            Save Changes</button>
    </div>
}

    </div>
    </form>
  )
}


export default ProfileForm
