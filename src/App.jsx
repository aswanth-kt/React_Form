import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import SuccessMessage from './components/SuccessMessage'
import Login from './components/Login'

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
