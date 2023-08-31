import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Login, Register } from './pages/index'
import { ProtectedRoutes } from './pages/ProtectedRoutes'
import { PublicRoutes } from './pages/PublicRoutes'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>

          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='profile' element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
