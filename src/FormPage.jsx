import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function FormPage() {
    const [formData,setFormData] = useState({});
    const navigate = useNavigate();
  return (
    <div>FormPage</div>
  )
}
