import "./Moneda.css"

const Cripto = ({name, priceUsd, symbol, marketCapUsd, changePercent24Hr}) => {
    return (
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p><span className="label">Precio: </span>${parseFloat(priceUsd).toFixed(3)}</p>
                <p><span className="label">Codigo: </span>{symbol}</p>
                <p><span className="label">Markek Cap: </span>${parseFloat(marketCapUsd).toFixed(3)}</p>
                <p>
                    <span className="label">Variación en 24Hrs: </span>
                    <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
                        ${parseFloat(changePercent24Hr).toFixed(3)}%</span>
                </p>
            </div>
        </div>
    )
}

export default Cripto