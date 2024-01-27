import { EmailForm } from "./components/EmailForm/EmailForm"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Nosotros } from "./components/Nosotros/Nosotros"
import { OfertasContainer } from "./components/Ofertas/OfertasConatiner"

export const LegalApp = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OfertasContainer />
      <Nosotros />
      <EmailForm />
      <Footer />
    </>
  )
}
