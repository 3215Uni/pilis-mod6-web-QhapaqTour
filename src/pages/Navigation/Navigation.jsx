import { Link, Outlet } from 'react-router-dom'

export const Navigation = () => {
  return (
    <>
      <h1>QhapaqTour</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </ul>
      <Outlet />
    </>
  )
}
