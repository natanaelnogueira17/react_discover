import React, {useState} from 'react'
import './style.css'
import { Card } from '../../componentes/card'

export function Home() {  
  const [studantName, setStudantName] = useState();
  const [students, setStudents]= useState([]);

  function handleAddStudent(){
    const newStudent = {
      name: studantName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: "2-digit",
        second:"2-digit"
      })
    }
    setStudents(prevState => [...prevState, newStudent])
  };

  return (
    < div className="container">

      <h1>Lista de Presença</h1>

      <input type="text"
             placeholder="Digite um nome: "
             onChange={e => setStudantName(e.target.value)}/>

      <button 
          type="button" 
          onClick={handleAddStudent}>
          Adcionar
      </button>
   
      {
        students.map(student => 
        <Card 
          key = {student.time}
          name={student.name} 
          time={student.time}/>)
      }
    </div>
  )
}

