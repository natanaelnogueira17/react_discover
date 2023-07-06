import React, {useState} from 'react'
import './style.css'
import { Card } from '../../componentes/card'

export function Home() {  
  const [studantName, setStudantName] = useState();

  return (
    < div className="container">

      <h1>Nome: {studantName}</h1>

      <input type="text"
             placeholder="Digite um nome: "
             onChange={e => setStudantName(e.target.value)}/>

      <button type="button">Adcionar</button>
      <Card 
          name="Rodrigo" 
          time="10:15:24"/>

      <Card 
          name="João" 
          time="10:18:96"/>     
    </div>
  )
}

