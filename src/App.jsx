import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Home, Login, Navigation, Profile, Register } from './pages/index'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
