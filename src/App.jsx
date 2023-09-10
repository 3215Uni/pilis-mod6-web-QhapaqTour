import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Login, Places, Profile, Register } from './pages/index'
import { ProtectedRoutes } from './pages/ProtectedRoutes'
import { PublicRoutes } from './pages/PublicRoutes'
import { Guide } from './pages/Guide/Guide'
import { Vehicles } from './pages/Vehicles/Vehicles'
import { Recorrido } from './pages/Recorrido/Recorrido'

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
            <Route path='profile' element={<Profile/>}/>
            <Route path='places' element={<Places/>}/>
            <Route path='guide' element={<Guide/>}/>
            <Route path='vehicles' element={<Vehicles/>}/>
            <Route path='recorrido' element={<Recorrido/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
