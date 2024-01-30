import { LinkItem, links } from './'

import './Navbar.css'

export const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" aria-label="Fourth navbar example">
        <div className="container-fluid">
          <a className="navbar-brand golden-text" href="#">Asesorias de Oro</a>
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
