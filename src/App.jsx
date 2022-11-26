import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

import {DecimaQuintaAula} from "./lessons/DecimaQuintaAula";
import {DecimaQuartaAula} from "./lessons/DecimaQuartaAula";
import {Home} from "./pages/Home";
import {SetimaAula} from "./lessons/SetimaAula";
import {QuartaAula} from "./lessons/QuartaAula";
import {QuintaAula} from "./lessons/QuintaAula";
import {OitavaAula} from "./lessons/OitavaAula";
import {DecimaAulaMesa} from "./lessons/DecimaAulaMesa";
import {DecimaTerceiraAula} from "./lessons/DecimaTerceiraAula";
import {NewGames} from "./pages/NewGames";
import {DesafioBlog} from "./lessons/DesafioBlog";

function App() {

    const router = createBrowserRouter([
        {
            path: "",
            element: <Home/>,
            children: [
                {
                    path: "segunda-aula",
                    element: <SetimaAula/>
                },
                {
                    path: "quarta-aula",
                    element: <QuartaAula/>
                },
                {
                    path: "quinta-aula",
                    element: <QuintaAula/>
                },
                {
                    path: "oitava-aula",
                    element: <OitavaAula/>
                },
                {
                    path: "decima-aula",
                    element: <DecimaAulaMesa/>
                },
                {
                    path: "decima-terceira-aula",
                    element: <DecimaTerceiraAula/>
                },
                {
                    path: "decima-quarta-aula",
                    element: <DecimaQuartaAula/>
                },
                {
                    path: "decima-quinta-aula",
                    element: <DecimaQuintaAula/>
                },
                {
                    path: "desafio-games",
                    element: <NewGames/>
                },
                {
                    path: "desafio-blog",
                    element: <DesafioBlog/>
                },  {
                    path: "desafio-blog/:id",
                    element: <DesafioBlog/>
                },
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App
