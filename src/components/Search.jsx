import React, { useContext } from 'react'
import { VscSearch } from 'react-icons/vsc'
import GIFContext from '../context/GIFContext'
export const Search = () => {
  const { setSearchInput, searchInput } = useContext(GIFContext)
  const changeHandle = (e) => {
    setSearchInput(e.target.value)
  }
  return (
    <form className="flex max-w-screen-xl mx-auto">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => changeHandle(e)}
        className="w-[calc(100%-60px)] px-5 rounded-l-md outline-none text-lg"
        placeholder="Search all the GIFs and Stickers"
      />
      <button className="w-14 h-14 bg-gradient-to-r from-[#BE46C9] to-[#E6598C] flex items-center justify-center rounded-r-md text-white">
        <VscSearch size={35} className="" />
      </button>
    </form>
  )
}
