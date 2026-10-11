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
import Featured from '../components/sections/Featured.jsx'
import FAQ from '../components/sections/FAQ.jsx'
import SocialLinks from '../components/sections/SocialLinks.jsx'
import CTA from '../components/sections/CTA.jsx'
import Contact from '../components/sections/Contact.jsx'
import { brandName, founderName, seo, siteUrl } from '../lib/seo.js'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords.join(', ')} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content={founderName} />
        <meta name="publisher" content={brandName} />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:site_name" content={brandName} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:image:alt" content="Guided Growth with Binita logo for clarity and personal growth coaching" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="twitter:image:alt" content="Guided Growth with Binita logo for clarity and personal growth coaching" />
        <link rel="canonical" href={`${siteUrl}/`} />
        <link rel="preload" as="image" href="/images/binita-desk.png" />
      </Helmet>

      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <ImagineForward />
        <WhoIHelp />
        <Services />
        <Transformation />
        <Testimonials />
        <CTA />
        <About />
        <Featured />
        <FAQ />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
