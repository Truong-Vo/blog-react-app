import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'
import Register from './components/Pages/Register/Register'
import Settings from './components/Pages/Setting/Setting'
import Single from './components/Pages/Single/Single'
import Write from './components/Pages/Write/Write'
import TopBar from './components/TopBar/TopBar'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Post from './components/Post/Post'
import { useContext } from 'react'
import { Context } from './context/Context'

function App() {
  const { user } = useContext(Context)
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/write" element={user ? <Write /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
