import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { TitleSection } from '../TitleSection/TitleSection'
import './EmailForm.css'

export const EmailForm = () => {

  const form = useRef();
  const [buttonStatus, setButtonStatus] = useState('Enviar')

  const sendEmail = event => {
    event.preventDefault();
    setButtonStatus('Enviando correo...')

    emailjs.sendForm('service_kaurhwp', 'contact_form', form.current, '6vBOL4XQ5xIp85Xis')
    .then( (result) => {
      setButtonStatus('Correo enviado 👍')
      form.current.reset()
    }, (error) => {
      console.log("ERROR " + error)
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
            <button type="submit" className="btn btn-dark w-100">
              {
                buttonStatus
              }
            </button>
          </div>
        </form>
      </div>    
    </>
  )
}

