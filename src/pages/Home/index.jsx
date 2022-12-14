import "./style.scss"
import {Link, Outlet} from "react-router-dom";

export function Home() {
    const aulas = [
        {name: "Segunda Aula", value: "segunda-aula"},
        {name: "Quarta Aula", value: "quarta-aula"},
        {name: "Quinta Aula", value: "quinta-aula"},
        {name: "Oitava Aula", value: "oitava-aula"},
        {name: "Decima Aula", value: "decima-aula"},
        {name: "Decima Terceira Aula", value: "decima-terceira-aula"},
        {name: "Decima Quarta Aula", value: "decima-quarta-aula"},
        {name: "Decima Quinta Aula", value: "decima-quinta-aula"},
        {name: "Desafio games", value: "desafio-games"},
        {name: "Dasafio Blog", value: "desafio-blog"}
    ]
    return (
        <>
            <div className="top-bar"><h1>Aulas Front III</h1></div>
            <div className="main">
                <aside>
                    <ul>
                        {
                            aulas.map(a =>
                                <li><Link to={a.value}>{a.name}</Link></li>
                            )
                        }
                    </ul>
                </aside>
                <main>
                    <Outlet/>
                </main>
            <div className="right"></div>
            </div>
        </>
    )
}