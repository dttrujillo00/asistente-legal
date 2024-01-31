import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { TitleSection } from '../TitleSection/TitleSection'
import './EmailForm.css'

export const EmailForm = () => {

  const form = useRef();

  const sendEmail = event => {
    event.preventDefault();

    emailjs.sendForm('service_kaurhwp', 'contact_form', form.current, '6vBOL4XQ5xIp85Xis')
    .then( (result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
    } );
  };

  return (
    <>
      <TitleSection id={ 'inscriptionContainer' } title={ 'Inscripción' } />

      <div className="row row-cols-1 row-cols-md-2 m-auto container mb-3">
        <form ref={form} onSubmit={ sendEmail } className='row g-3 border rounded-3 p-3 shadow-sm'>
          <div className="col-md-6">
            <input name='user_name' type="text" className="form-control" placeholder="Nombre completo" />
          </div>
          <div className="col-md-6">
            <input name='user_email' type="email" className="form-control" placeholder="correo electrónico" />
          </div>
          <div className="col-12">
            <textarea name='message' rows="5" className="form-control" placeholder="Mensaje"></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark w-100">Enviar</button>
          </div>
        </form>
      </div>    
    </>
  )
}

