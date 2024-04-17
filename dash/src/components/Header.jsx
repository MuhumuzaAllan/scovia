import React from 'react'
import Search from './ui/Search'

const Header = () => {
  return (
    <div className='flex flex-wrap justify-between gap-10 mt-12 md:w-780'>
      <Search />
     <span>HR PORTAL</span>
    </div>
  )
}

export default Header