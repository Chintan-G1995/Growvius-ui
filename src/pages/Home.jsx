import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Achievements from '../components/Achievements/Achievements.jsx'
import Stats from '../components/Stats/Stats.jsx'
import Services from '../components/Services/Services.jsx'
import Solutions from '../components/Solutions/Solutions.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Achievements />
      <Solutions />
      <Contact />
      <Footer />
    </>
  )
}