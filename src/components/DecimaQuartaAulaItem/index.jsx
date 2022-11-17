import {useEffect} from "react";

export function DecimaQuartaAulaItem(props) {

    function deletarRegistro() {
        props.delete(props.registerData)
    }

    useEffect(() => {
        console.log("The Component was created")
        return console.log("The Componente has been destroy")
    }, [])

    return (
        <ul>
            <li>
                <h1>{props.registerData.title}</h1>
                <button onClick={() => deletarRegistro()}>Deletar</button>
            </li>
        </ul>
    )
}