import "./style.css";

export default function CardName({name}){
    return (
        <header className="card-header">
          <h2>{name.length > 15 ? `${name.substring(0,14)}...` : name}</h2>
        </header>
    )
  }