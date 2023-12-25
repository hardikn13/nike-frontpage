import {useState} from 'react'
import {headerLogo }from '..//assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    const closeDropdown = () => {
      setShowDropdown(false);
    };
  
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
        <a href='/'>
            <img src={headerLogo} alt="Logo" width={130} height={29}  />
        </a>
        <ul className='flex-1 flex gap-16 max-lg:hidden justify-center items-center'>
            {navLinks.map((item) =>(
                <li key={item.label}>
                    <a href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-400'
                    >{item.label}</a>
                </li>
            ))}
        </ul>
        <div className="">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className='cursor-pointer hidden max-lg:block'
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white shadow-md">
              <ul className='flex flex-col gap-4 px-10 py-3 mt-3 mb-3 w-full'>
                {navLinks.map((item) => (
                  <li key={item.label} onClick={closeDropdown}>
                    <a
                      href={item.href}
                      className='font-montserrat leading-normal text-lg text-slate-400'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
    </nav>
    </header>
  )
}

export default Nav