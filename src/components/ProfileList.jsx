import { useState } from 'react'
import {FaTrash} from 'react-icons/fa'

import { profiles } from '../data'

const ProfileList = () => {
 const [profile, setProfile] = useState(profiles);
 console.log(profile);

 const removeItem = (id)=> {
  const newList = profile.filter(item => item.id !== id);
  setProfile(newList);
 }

 const clearItems = () => {
  setProfile([])
 }

  return (
   <section className='min-h-screen grid place-items-center'>

    <div>
      <h1 className='text-white text-3xl font-semibold mb-2 text-center'>
     User Profile App
    </h1>

    <div className=' flex flex-col space-y-2'>
     {profile.map(({id, name, job, img}) => {
      return (
        <div key={id} className='min-w-[450px] py-1 px-2 flex justify-between
    items-center border border-gray-300 bg-slate-800 rounded-md'>

    <img src={img} alt=""
    className='w-[100px] h-[100px] object-cover rounded-full'/>
    <div className='self-start mt-2'>
     <h1 className='text-white py-1 text-xl font-semibold'>Name: {name}</h1>
     <h3 className='text-gray-200 text-lg'>Job: {job}</h3>
     
    </div>

    <FaTrash onClick={() => removeItem(id)} className='self-start mt-6 text-white mx-1 text-lg cursor-pointer hover:text-red-500
    transition duration-150 ease-in-out'/>
    
    </div>
      )
     })

     }
     <button onClick={clearItems} className='self-start bg-orange-400 text-white px-1 py-1 
     rounded'>
      Clear All
     </button>
    </div>
    </div>
    
    
    </section>
  )
}

export default ProfileList