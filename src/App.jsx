import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

import {DecimaQuintaAula} from "./lessons/DecimaQuintaAula";
import {MainLayout} from "./components/MainLayout";
import {DecimaQuartaAula} from "./lessons/DecimaQuartaAula";
function App() {

    const router = createBrowserRouter([
        {
            path: "",
            element: <MainLayout/>,
            children:[
                {
                    path: "decima-quarta-aula",
                    element: <DecimaQuintaAula/>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App
