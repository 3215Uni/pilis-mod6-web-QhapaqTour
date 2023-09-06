import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Dashboard, Login, Navigation, Places, Profile, Register } from './pages/index'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='places' element={<Places/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
