import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import SuccessMessage from './components/SuccessMessage'
import Login from './pages/Login'

function App() {

  return (
    <>
    

      <Routes>

        <Route 
          path='/signup'
          element={<Signup />} 
        />

        <Route 
          path='/login'
          element={<Login />} 
        />

        <Route 
          path='/success'
          element={<SuccessMessage />}
        />
        
      </Routes>

    </>
  )
}

export default App
