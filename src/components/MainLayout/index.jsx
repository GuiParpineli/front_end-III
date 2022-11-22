import "./style.scss"
import {Outlet} from "react-router-dom";

export function MainLayout() {

    return (
        <div className="main-layout-component">
            <header className="main-layout-component-header">
                <h1>Layout Principal</h1>
            </header>
            <main className="main-layout-component-main">
                <p>The contend load here:</p>
                <Outlet />
            </main>
        </div>
    )
}