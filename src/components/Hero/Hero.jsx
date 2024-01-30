import './Hero.css'

export const Hero = () => {
  return (
    <div className="hero">
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-1">
                {/* <div className="col-10 col-sm-8 col-lg-6">
                    <img src="./src/assets/gavel-3577258_1280.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div> */}
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Asesorias de Oro</h1>
                    <p className="lead">Aqui le brindamos el mejor servicio de todo el país, si quiere mantenerse informado de las últimas regulaciones, mantener su negocio en la legalidad y sobre todo, trabajar con los mejores, no esperes más y solicita nuestros servicios</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a href="#ofertasContainer" className="btn bg-dark btn-lg px-4 me-md-2 golden-text">Solicitar</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
