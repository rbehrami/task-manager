import {useState} from 'react'


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md fixed w-full z-50">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center'>
                    {/* Logo */}
                    <div className='text-2xl font-bold tracking-wide'>
                        TaskManager
                    </div>
                    {/* Desktop Menu */}
                    <div className='hiden md:flex space-x-8 font-medium'>
                        <a href="" className='hover:text-gray-200 transition'>Home</a>
                        <a href="" className='hover:text-gray-200 transition'>Service</a>
                        <a href="" className='hover:text-gray-200 transition'>Pricing</a>
                        <a href="" className='hover:text-gray-200 transition'>About</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}