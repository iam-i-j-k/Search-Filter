import React, { useState } from 'react';
import data from './data';


const App = () => {
  
  const [search, setSearch] = useState('');
  return (
    <div className="px-4 w-full h-full text-white bg-gradient-to-b from-slate-950 to-slate-900">
      <h1 className='text-4xl py-5 font-semibold text-center italic'>List of Users</h1>
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
      <table className='w-full mt-5 border-2 border-slate-500 rounded-md'>
        <thead>
          <tr>
            <th className='border-r border-b border-slate-500 font-semibold p-2'>ID</th>
            <th className='border-r border-b border-slate-500 font-semibold p-2'>First Name</th>
            <th className='border-r border-b border-slate-500 font-semibold p-2'>Last Name</th>
            <th className='border-r border-b border-slate-500 font-semibold p-2'>Email</th>
            <th className='border-r border-b border-slate-500 font-semibold p-2'>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((user) =>
            `${user.first_name} ${user.last_name} ${user.email} ${user.gender}`.toLowerCase().includes(search.toLowerCase())
          ).map((user) => (
            <tr key={user.id}>
              <td className='border-r border-b border-slate-500 font-normal p-2'>{user.id}</td>
              <td className='border-r border-b border-slate-500 font-normal p-2'>{user.first_name}</td>
              <td className='border-r border-b border-slate-500 font-normal p-2'>{user.last_name}</td>
              <td className='border-r border-b border-slate-500 font-normal p-2'>{user.email}</td>
              <td className='border-r border-b border-slate-500 font-normal p-2'>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
