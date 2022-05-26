import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => (
<nav 
className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link href="/">
      <a className="navbar-brand">Portfolio</a>    
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link href="/">
                <a className="nav-link active" aria-current="page">Inicio</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/projects">
                <a className="nav-link">Projects</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/contact">
                <a className="nav-link" >Contact</a>
            </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)

export default Navbar;