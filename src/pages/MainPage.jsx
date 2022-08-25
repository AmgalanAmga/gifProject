import React from 'react'
import { TrendingRow, ArtistsRow, GifsFromInput } from '../components'
export const MainPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <TrendingRow />
      <ArtistsRow />
      <GifsFromInput/>
    </div>
  )
}
