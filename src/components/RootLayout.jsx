import { Outlet } from 'react-router-dom'
import Header from './Header'

const RootLayout = () => {

  return (
    <div className='min-h-[100vh]'>
<Header />
  <Outlet />
    </div>
  )
}

export default RootLayout