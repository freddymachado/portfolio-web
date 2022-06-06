import Navbar from "./Navbar"
import { useEffect } from "react"

const Layout = ({children, footer=true}) => {

    return (
        
    <>
    <Navbar />
    <main className="container py-4">
        {children}
    </main>
    { footer && (
        
        <footer className="bg-dark text-light text-center">
            <div className="container p-4">
                <h1>&copy; Freddy Machado Portfolio</h1>
                <p>2019 - {new Date().getFullYear()}</p>
                <p>All rights Reserved.</p>
            </div>

        </footer>
    )}
</>
    )
}

export default Layout;