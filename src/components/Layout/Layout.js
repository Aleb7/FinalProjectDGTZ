import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

//Pagina principale dove la prima route porterà sempre quando si va alla Home
//Qui verranno inseriti tutti i componenti che voglio far vedere all'apertura della pagina
//outlet è un componente dinamico che viene sostituito sempre dalla corrispondente route in app.js
const Layout = () => {

    return (
        <>
        <header>
            <Sidebar />
        </header>
        <main>
            <Outlet />  
        </main>
        </>
    );
}

export default Layout;