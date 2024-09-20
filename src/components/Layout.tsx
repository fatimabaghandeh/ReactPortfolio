import { Outlet } from 'react-router-dom'
import NavBar from './navBar'
function Layout() {
  return (
    <div className='flex'>
        <NavBar/>
       <Outlet/>
      
    </div>
  )
}

export default Layout

