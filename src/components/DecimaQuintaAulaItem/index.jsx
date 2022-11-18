import './style.scss'

export function DecimaQuintaAulaItem(props) {

    return (
        <div className="decima-quinta-aula-item">
            <h1>{props.data.localidade}</h1>
            <address>{props.data.logradouro}</address>
            <small>{props.data.cep}</small>
            <button onClick={() => props.onDeleteLocation(props.id)}>Deletar</button>
        </div>
    )

}