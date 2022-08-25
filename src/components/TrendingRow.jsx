import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import GIFContext from '../context/GIFContext'
import { IoMdTrendingUp } from 'react-icons/io'
import { MdArrowForwardIos } from 'react-icons/md'
export const TrendingRow = () => {
  const { GIFsTrend } = useContext(GIFContext)
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
    <div className="mt-10 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <IoMdTrendingUp size={30} className="text-[#00CCFF]" />
          <h1 className="font-bold text-white text-2xl">Trending</h1>
        </div>
        <Link
          to={'/trending-gifs'}
          className="flex items-center text-[#A6A6A6] font-semibold mr-2"
        >
          All the GIFs <MdArrowForwardIos className="ml-1" />
        </Link>
      </div>
      <div className="w-full h-36 flex space-x-2 mt-5">
        {GIFsTrend.splice(0, 8).map((data, id) => {
          const randomColor = Math.floor(Math.random() * colorArray.length)
          return (
            <div className="h-full w-40" key={id}>
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
