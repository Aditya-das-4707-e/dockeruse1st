import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'
const Navbar = () => {
    const dispatch = useDispatch();
  return (
    <nav className='flex flex-col lg:flex-row py-3 mx-3 justify-between mb-10'>
        <div>
            <h3
                className='text-xl font-bold text-gray-600'
            >{new Date().toUTCString().slice(0,16)}</h3>
            <h1
                className='text-2xl font-bold'
            >Flavoro Foods</h1>
        </div>
        <div>
            <input 
                type='search'
                name='search'
                id=''
                onChange={(e)=> dispatch(setSearch(e.target.value))}
                placeholder='Search here'
                autoComplete='off'
                className='border p-3 border-gray-400 text-sm lg:w-[25vw] w-full outline-none rounded-lg'
            />
        </div>
    </nav>
  )
}

export default Navbar