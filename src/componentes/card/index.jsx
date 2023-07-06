import './style.css'

export function Card(props){
    return(
        <div className='card'> 
            <strong>{props.name}</strong> <br />
            <small>{props.time}</small>            
        </div>
    )
}