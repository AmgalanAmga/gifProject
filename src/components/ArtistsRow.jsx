import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from 'react-icons/md'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import GIFContext from '../context/GIFContext'
export const ArtistsRow = () => {
  const { GIFsArtists } = useContext(GIFContext)
  const colorArray = [
    '#f9eead',
    '#d5f9b6',
    '#bff8cb',
    '#c7f7f2',
    '#cfe0f6',
    '#99ccff',
    '#99ffcc',
    '#cc99ff',
    '#ccff99',
    '#ff99cc',
  ]
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <AiOutlineThunderbolt size={30} className="text-[#F25591]" />
          <h1 className="font-bold text-white text-2xl">Artists</h1>
        </div>
        <Link
          to={'/artists'}
          className="flex items-center text-[#A6A6A6] font-semibold mr-2"
        >
          All GIPHY Artists <MdArrowForwardIos className="ml-1" />
        </Link>
      </div>
      <div className="w-full h-52 flex space-x-2 mt-5">
        {GIFsArtists.splice(0, 5).map((data, id) => {
          const randomColor = Math.floor(Math.random() * colorArray.length)
          return (
            <div className="h-full w-52" key={id}>
              <div
                style={
                  !data ? '' : { backgroundColor: colorArray[randomColor] }
                }
                className="h-full w-full overflow-hidden rounded-md"
              >
                <img
                  src={data.images.original.url}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
