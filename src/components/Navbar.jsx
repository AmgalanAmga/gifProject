import React from 'react'
import { Search } from './Search'
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import gifIcon from '../images/gitIcon.png'
import { BsThreeDotsVertical } from 'react-icons/bs'
export const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between max-w-screen-xl mx-auto text-white pt-2">
        <Link to={"/"} className="flex items-center">
          <img src={gifIcon} alt="gifIcon" className="w-16" />
          <h1 className="text-5xl uppercase font-bold">giphy</h1>
        </Link>
        <ul className="flex space-x-1">
          <li className="relative text-lg py-2 px-3 font-semibold hover:bg-gradient-to-r from-[#6951FF] to-[#8640FF] rounded-t-md">
            <Link to={'/reactions'}>Reactions</Link>
            <span className="absolute bottom-0 left-0 w-full py-0.5 bg-gradient-to-r from-[#6951FF] to-[#8640FF]"></span>
          </li>
          <li className="relative text-lg py-2 px-3 font-semibold hover:bg-gradient-to-r from-[#6951FF] to-[#8640FF] rounded-t-md">
            <Link to={'/entertainment'}>Entertainment</Link>
            <span className="absolute bottom-0 left-0 w-full py-0.5 bg-gradient-to-r from-[#6951FF] to-[#8640FF]"></span>
          </li>
          <li className="relative text-lg py-2 px-3 font-semibold hover:bg-gradient-to-r from-[#6951FF] to-[#8640FF] rounded-t-md">
            <Link to={'/sports'}>Sports</Link>
            <span className="absolute bottom-0 left-0 w-full py-0.5 bg-gradient-to-r from-[#6951FF] to-[#8640FF]"></span>
          </li>
          <li className="relative text-lg py-2 px-3 font-semibold hover:bg-gradient-to-r from-[#6951FF] to-[#8640FF] rounded-t-md">
            <Link to={'/stickers'}>Stickers</Link>
            <span className="absolute bottom-0 left-0 w-full py-0.5 bg-gradient-to-r from-[#6951FF] to-[#8640FF]"></span>
          </li>
          <li className="relative text-lg py-2 px-3 font-semibold hover:bg-gradient-to-r from-[#6951FF] to-[#8640FF] rounded-t-md">
            <Link to={'/artists'}>Artists</Link>
            <span className="absolute bottom-0 left-0 w-full py-0.5 bg-gradient-to-r from-[#6951FF] to-[#8640FF]"></span>
          </li>
          <li className="relative flex items-center p-1 hover:bg-gradient-to-r from-[#6951FF] to-[#8640FF] rounded-t-md">
            <BsThreeDotsVertical size={25} />
            <span className="absolute bottom-0 left-0 w-full py-0.5 bg-gradient-to-r from-[#6951FF] to-[#8640FF]"></span>
          </li>
        </ul>
        <div className="space-x-1 flex flex-nowrap">
          <button className="font-semibold py-2 px-5 bg-[#6951FF] rounded-md">
            Upload
          </button>
          <button className="font-semibold py-2 px-5 bg-[#8640FF] rounded-md">
            Create
          </button>
        </div>
        <Link
          to={'/login'}
          className="flex items-center rounded-md overflow-hidden bg-[#3E3E3E]"
        >
          <span className="bg-[#525252] p-3">
            <FaUserAlt size={15} />
          </span>
          <span className=" whitespace-nowrap px-10 text-base font-semibold">
            Log In
          </span>
        </Link>
      </div>
      <Search />
    </>
  )
}
