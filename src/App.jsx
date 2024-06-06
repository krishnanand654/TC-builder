
import './App.css'
import { Routes, Route } from 'react-router-dom'
import InputForm from './pages/InputForm/InputForm'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Bonafied from './pages/Bonafied/Bonafied'
import PreviewTcTemplate from './Components/PreviewTcTemplate/PreviewTcTemplate'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tcform" element={<InputForm />} />

        <Route path="/bonafiedform" element={<Bonafied />} />
        <Route path="/preview" element={<PreviewTcTemplate />} />


      </Routes>
    </>
  )
}

export default App
