import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <main>
                <Outlet/>
            </main>
            <Header className={"header"}/>
            <Footer className={"footer"}/>
        </>
    )
}