import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={ s.navbar }>
      <NavLink to='/storefunc'>
        <input type='button' className={ s.button } value='STOREFUNC' />
      </NavLink>   

      <NavLink to='/storeclass'>
        <input type='button' className={ s.button } value='STORECLASS' />
      </NavLink>
      
      <NavLink to='/calendar'>
          <input type='button' className={ s.button } value='CALENDAR' />
      </NavLink>
    </div>
    
  )
}

export default Navbar 