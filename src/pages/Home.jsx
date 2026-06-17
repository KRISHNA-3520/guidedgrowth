import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import Hero from '../components/sections/Hero.jsx'
import ImagineForward from '../components/sections/ImagineForward.jsx'
import About from '../components/sections/About.jsx'
import WhoIHelp from '../components/sections/WhoIHelp.jsx'
import Services from '../components/sections/Services.jsx'
import Transformation from '../components/sections/Transformation.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import FAQ from '../components/sections/FAQ.jsx'
import SocialLinks from '../components/sections/SocialLinks.jsx'
import CTA from '../components/sections/CTA.jsx'
import Contact from '../components/sections/Contact.jsx'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Guided Growth with Binita — Growth Coach for Capable Professionals</title>
        <meta name="description" content="Private coaching for thoughtful professionals navigating uncertainty, overthinking, and self-doubt. Move toward clarity, self-trust, and aligned growth." />
        <meta property="og:title" content="Guided Growth with Binita — Growth Coach for Capable Professionals" />
        <meta property="og:description" content="Private coaching for thoughtful professionals navigating uncertainty, overthinking, and self-doubt. Move toward clarity, self-trust, and aligned growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guidedgrowthwithbinita.in/" />
        <link rel="canonical" href="https://guidedgrowthwithbinita.in/" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <ImagineForward />
        <About />
        <WhoIHelp />
        <Services />
        <Transformation />
        <Testimonials />
        <FAQ />
        <SocialLinks />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
