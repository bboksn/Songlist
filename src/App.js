import {React,useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
const [cards,setCards] = useState([{coverUrl:"",artistName:"",songName:"",tabLink:"",id:0}]);
  useEffect(() => {
    fetch('http://localhost:3001/cards')
    .then((response) => response.json())
    .then(e=>{
        console.log('success :)',e)
        setCards(e)
    })
}, [])
export default function App() {
  return (
    <div>App</div>
  )
}
