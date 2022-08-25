import React, { useContext } from 'react'
import GIFContext from '../context/GIFContext'
export const AllTrending = () => {
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
    <div className="text-white max-w-screen-xl mx-auto">
      <h1 className="py-3 text-xl tracking-widest font-semibold">
        Trending GIFs
      </h1>
      <div className="w-full grid grid-cols-4 grid-rows-6 gap-3">
        {GIFsTrend.map((gif, id) => {
          const nums = [2, 3]
          let randomNum = Math.floor(Math.random() * 2)
          const randomColor = Math.floor(Math.random() * colorArray.length)
          return (
            <div
              style={!gif ? '' : { backgroundColor: colorArray[randomColor] }}
              key={id}
              className={`relative row-span-${nums[randomNum]} rounded-xl overflow-hidden h-full`}
            >
              <img
                src={gif.images.original.url}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/30 hover:opacity-100 duration-300 ease-in-out flex items-center justify-center px-3">
                <h1 className=" text-xl font-bold">{gif.title}</h1>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
