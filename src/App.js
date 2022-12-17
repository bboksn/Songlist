import {React,useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import Nav from './Nav';
import Cardspage from './Cardspage';
export default function App() {
  const [cards,setCards] = useState([{coverUrl:"",artistName:"",songName:"",tabLink:"",id:0}]);
  useEffect(() => {
    fetch('http://localhost:3001/cards')
    .then((response) => response.json())
    .then(e=>{
        console.log('success :)',e)
        setCards(e)
    })
}, [])
  return (
    <div>
      <Nav></Nav>
      <Routes>
      <Route path='/' element={<Cardspage cards={cards} setCards={setCards}/>}/>
      <Route path='songs' element={<Cardspage cards={cards} setCards={setCards}/>}/>
      <Route path='songs/new' element={<FormPage cards={cards} setCards={setCards}/>}/>
      </Routes>
    </div>
  )
}
