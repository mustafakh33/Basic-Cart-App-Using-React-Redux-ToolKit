
import AppNavbar from '../components/AppNavbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <AppNavbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
