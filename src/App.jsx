import { useEffect, useState } from "react"
import Cripto from "./Moneda"
import axios from "axios"
import "./App.css"
import "./Main.css"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState ()
  
  useEffect (() => {
    axios.get(`${API_URL}assets`)
    .then((data) => {
      console.log(data)
      setCriptos(data.data.data)
    })
    .catch(()=>{
      console.log("la peticion fallo")
    })
  }, [])

  if(!criptos) return <span>Cargando...</span>


  return (
    <div className="app-container">
    <h1>Lista de Criptomonedas</h1>
    <div className="cripto-container">
      {criptos.map(({id, name, priceUsd, symbol, marketCapUsd, changePercent24Hr}) => (
        <Cripto 
        key={id} 
        name={name} 
        priceUsd={priceUsd}
        symbol={symbol}
        marketCapUsd={marketCapUsd}
        changePercent24Hr={changePercent24Hr} />
      ))}
      </div>
    </div>
  )
}

export default App


