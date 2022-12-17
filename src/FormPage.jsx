import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function FormPage() {
    const [formData,setFormData] = useState({});
    const navigate = useNavigate();
    function fillForm(e){
        e.preventDefault();
        setFormData({
            ...formData,
            [e.currentTarget.name]:e.currentTarget.value
        })
        console.log("DATA!!!",formData)
    }
    function handleForm(e){
        e.preventDefault()
        fetch('http://localhost:3001/cards', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
              // Change cards state
              setCards([...cards,data])
              navigate("/songs")
            })
    }
  return (
    <div>
        <form className='flex flex-col border-2' onSubmit={handleForm}>
         Cover Image Url: <input className='border-2 border-black border-dashed mb-7'  onChange={fillForm} name='coverUrl' type="text"/>
         Artist Name:   <input className='border-2 border-black border-dashed mb-7' onChange={fillForm} name='artistName' type="text"/>
         Song Name:   <input className='border-2 border-black border-dashed mb-7'  onChange={fillForm} name='songName' type="text"/>
         GuitarTab/Youtube Url:   <input className='border-2 border-black border-dashed mb-7' onChange={fillForm} name='tabLink' type="text"/>
         <button className='lg:text-3xl border-black border-4 w-[10%] self-center rounded-xl font-serif' type='submit'>Enter</button>
        </form>
    </div>
  )
}
