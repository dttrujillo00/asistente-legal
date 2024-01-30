import './OfertaCard.css'

export const OfertaCard = ({ title, price, services }) => {
  return (
    <div className="card mb-4 rounded-3 shadow-sm">
      <div className={title === 'Empresas'?"card-header py-3 bg-dark golden-text":"card-header py-3 bg-dark text-white"} id={`${title}Card`} >
        <h4 className="my-0 fw-normal">{ title }</h4>
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h1 className="card-title pricing-card-title">
          ${ price }<small className="text-body-secondary fw-light">/mes</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
            {
                services.map( service => <li key={ Math.random() } >{ service }</li> )
            }
        </ul>
        <a href={`#inscriptionContainer`} className="w-100 btn btn-lg btn-outline-dark bg-dark golden-text">
          Inscribirme
        </a>
      </div>
    </div>
  );
};
