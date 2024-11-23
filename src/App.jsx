import React, { useState } from 'react';
import data from './data';


const App = () => {
  
  const [search, setSearch] = useState('');
  return (
    <div className="px-2 sm:px-4 w-full min-h-screen text-white bg-gradient-to-b from-slate-950 to-slate-900">
      <h1 className='text-2xl sm:text-4xl py-3 sm:py-5 font-semibold text-center italic'>List of Users</h1>
      <form className='pt-1'>
        <div className="relative">
          <input 
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search" 
            className="w-full text-slate-950 p-2 border-2 focus:ring-2 focus:ring-offset-2 rounded-full"
          />
        </div>
      </form> 
      <div className="overflow-x-auto">
        <table className='w-full mt-5 border-2 border-slate-500 rounded-md min-w-[640px]'>
          <thead>
            <tr>
              <th className='border-r border-b border-slate-500 font-semibold p-1 sm:p-2'>ID</th>
              <th className='border-r border-b border-slate-500 font-semibold p-1 sm:p-2'>First Name</th>
              <th className='border-r border-b border-slate-500 font-semibold p-1 sm:p-2'>Last Name</th>
              <th className='border-r border-b border-slate-500 font-semibold p-1 sm:p-2'>Email</th>
              <th className='border-r border-b border-slate-500 font-semibold p-1 sm:p-2'>Gender</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((user) =>
              `${user.first_name} ${user.last_name} ${user.email} ${user.gender}`.toLowerCase().includes(search.toLowerCase())
            ).map((user) => (
              <tr key={user.id}>
                <td className='border-r border-b border-slate-500 font-normal p-1 sm:p-2 text-sm sm:text-base'>{user.id}</td>
                <td className='border-r border-b border-slate-500 font-normal p-1 sm:p-2 text-sm sm:text-base'>{user.first_name}</td>
                <td className='border-r border-b border-slate-500 font-normal p-1 sm:p-2 text-sm sm:text-base'>{user.last_name}</td>
                <td className='border-r border-b border-slate-500 font-normal p-1 sm:p-2 text-sm sm:text-base'>{user.email}</td>
                <td className='border-r border-b border-slate-500 font-normal p-1 sm:p-2 text-sm sm:text-base'>{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
