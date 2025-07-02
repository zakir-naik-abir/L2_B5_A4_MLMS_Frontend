import { Navbar } from '@/components/shared/Navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-[calc(100vh-306px)] m-2">
      <Outlet></Outlet>
      </div>
    </div>
  )
}
