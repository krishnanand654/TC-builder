
import './App.css'
import { Routes, Route } from 'react-router-dom'
import InputForm from './pages/InputForm/InputForm'
import Login from './pages/Login/Login'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<InputForm />} />


      </Routes>
    </>
  )
}

export default App
