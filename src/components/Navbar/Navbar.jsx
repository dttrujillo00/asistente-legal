import { LinkItem, links } from './'

import './Navbar.css'

export const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Asesorias de Oro</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {
                links.map( link => {
                  return (
                  <LinkItem key={ link.id } name={ link.name } to={ link.href }/>
                  )
                } )
              }
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
            <form role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
