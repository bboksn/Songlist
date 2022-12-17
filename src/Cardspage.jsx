import React from 'react'
import Card from './Card'

export default function Cardspage({cards}) {
  return (
    <>
    <div className='flex flex-wrap'>
    {cards.map(e => {
     return <Card coverUrl={e.coverUrl} artistName={e.artistName} songName={e.songName} tabLink={e.tabLink} key={e.id}></Card>  
    })}
    </div>
    </>
  )
}
