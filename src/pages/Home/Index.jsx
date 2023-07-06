import './style.css'
import { Card } from '../../componentes/card'

export function Home() {  
  return (
    < div className="container">
      <h1>Lista de Presenca</h1>
      <input type="text" placeholder="Digite um nome: "/>
      <button type="button">Adcionar</button>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

