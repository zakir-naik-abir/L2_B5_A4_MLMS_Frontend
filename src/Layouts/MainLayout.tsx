import { Footer } from '@/components/shared/Footer'
import { Navbar } from '@/components/shared/Navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-[calc(100vh-160px)] m-2">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
