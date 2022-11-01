import './style.scss'
import {useState} from "react";

export function SetimaAula() {

    const [contador, setContador] = useState(0)
    const [temaEscuro, setTemaEscuro] = useState(true)

    function somarNumero() {
        setContador(contador + 1)
    }

    function mudarTema() {
        setTemaEscuro(!temaEscuro)
    }

    return (

        <main className={`setima-aula-component ${temaEscuro ? "dark-theme" : ""}`}>

            <h1>Contador</h1>

            <button onClick={() => mudarTema()}>Mudar Tema</button>
            <button onClick={somarNumero}>Adicionar</button>
            <span>Número atual: {contador}</span>

        </main>

    )
}