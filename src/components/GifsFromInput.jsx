import React, { useContext } from 'react'
import GIFContext from '../context/GIFContext'
export const GifsFromInput = () => {
  const { getGIFFromSearch } = useContext(GIFContext)
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
      <h1 className="text-white">Results</h1>
      <div className="w-full h-52 grid grid-cols-5 gap-4 mt-5">
        {getGIFFromSearch.map((data, id) => {
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
