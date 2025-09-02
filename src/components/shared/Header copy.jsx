import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/task-manager-icon-vector.jpg'
import LoginButton from '../../slices/LoginButton'

const nav_menu=[
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'About',
    link: '#'
  },
   {
    label: 'Pricing',
    link: '/pricing',
  },
   {
    label: 'Contact',
    link: '#'
  },
]
const Header = () => {
  return (
   <header className='bg-neutral-silver py-6'>
    <div className='container mx-auto flex justify-between items-center'>
      <a href="/S"><img className='w-18' src={logo} alt="" /></a>
    <nav>
      <ul className='flex justify-between items-center gap-6'>        
          {nav_menu.map((navItems,idx)=>(
            <li key={idx} className='text-neutral-d-grey'>
              <Link to={navItems.link}>{navItems.label}</Link></li>
          ))}
      </ul>
    </nav>
    <div className='flex gap-2 items-center'>
      <LoginButton />
    </div>
    </div>
   </header>
  )
}

export default Header;
