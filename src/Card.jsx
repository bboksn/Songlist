import React from 'react'

export default function Card({coverUrl='https://imgs.search.brave.com/msk7_bxc_T8UrMACBkGlcmWIT3z_EyrVBA6BWBk6XHI/rs:fit:1200:1200:1/g:ce/aHR0cDovL2RhaWx5/dHJvamFuLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Mi9pbnV0ZXJvLmpw/Zw',artistName='Artist',songName='Name',tabLink}) {
  return (
    <a href={tabLink} target="blank_" className='border-black border-x-4 border-y-4 rounded-3xl w-72 h-96  shadow-green-500 shadow-lg flex flex-col mx-3 my-10 items-center justify-around text-2xl font-bold font-serif'>
    <img className='w-[80%] h-[50%] rounded-3xl py-1' src={coverUrl} alt={songName} />
    <p className=''>{artistName}</p>
    <p className=''>{songName}</p>
    </a>
  )
}
