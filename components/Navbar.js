import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from "next/router";


const Navbar = () => {

  const router = useRouter()
  const activeClass = (route) => { return router.pathname === route ? "nav-link active" : "nav-link" }

  return (
    <nav 
    className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Portfolio    
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link href="/" className={activeClass("/")} aria-current="page">
                    Inicio
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/projects" className={activeClass("/projects")}>
                    Projects
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/contact" className={activeClass("/contact")}>
                    Contact
                </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>

  )
}

export default Navbar;