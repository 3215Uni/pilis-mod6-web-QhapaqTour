import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Header } from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

export const Navigation = () => {
  return (
    <>
      <Header/>
      <Sidebar />
      <Outlet />
    </>
  )
}
