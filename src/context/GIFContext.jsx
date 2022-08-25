import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

const GIFContext = createContext()
export const GIFProvider = ({ children }) => {
  const [GIFsTrend, setGIFsTrend] = useState([])
  const [artists, setArtists] = useState('artists')
  const [searchInput, setSearchInput] = useState('')
  const [GIFsArtists, setGIFsartists] = useState([])
  const [trending, setTrending] = useState('trending')
  const [getGIFFromSearch, setGetGIFFromSearch] = useState([])
  const getTrend = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=sfJoNIbYEOS4pmyNpQe5lT4FkLd6xmAg&q=${trending}&limit=30`,
      )
      .then((response) => setGIFsTrend(response.data.data))
  }
  const getArtists = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=sfJoNIbYEOS4pmyNpQe5lT4FkLd6xmAg&q=${artists}&limit=30`,
      )
      .then((response) => setGIFsartists(response.data.data))
  }
  const getInput = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=sfJoNIbYEOS4pmyNpQe5lT4FkLd6xmAg&q=${searchInput}&limit=30`,
      )
      .then((response) => setGetGIFFromSearch(response.data.data))
  }
  useEffect(() => {
    getTrend()
    getInput()
    getArtists()
  }, [searchInput])
  return (
    <GIFContext.Provider
      value={{
        GIFsTrend,
        GIFsArtists,
        searchInput,
        setSearchInput,
        getGIFFromSearch,
      }}
    >
      {children}
    </GIFContext.Provider>
  )
}
export default GIFContext
