import { TitleSection } from "../TitleSection/TitleSection";
import { OfertaCard } from "./OfertaCard/OfertaCard";
import { ofertas } from "./ofertas";

export const OfertasContainer = () => {
  return (
    <>
    <TitleSection id={'ofertasContainer'} title={'Paquetes'} />
      {/* <div className="pricing-header p-3 pb-md-4 mx-auto text-center" id="ofertasContainer">
        <h2 className="display-4 fw-normal text-body-emphasis">Paquetes</h2>
      </div> */}
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center container m-auto">
        {
            ofertas.map( oferta => {
                return (
                    <div key={ oferta.id } className="col">
                        <OfertaCard title={ oferta.title } price={ oferta.price } services={ oferta.services } />
                    </div>

                )
            } )
        }
      </div>
    </>
  );
};
