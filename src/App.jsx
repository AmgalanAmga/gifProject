import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import {
  Login,
  Sports,
  MainPage,
  Stickers,
  Reactions,
  AllArtists,
  AllTrending,
  Entertainment,
} from './pages'

const App = () => {
  return (
    <div className="max-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/stickers" element={<Stickers />} />
        <Route path="/artists" element={<AllArtists />} />
        <Route path="/reactions" element={<Reactions />} />
        <Route path="/trending-gifs" element={<AllTrending />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </div>
  )
}

export default App
