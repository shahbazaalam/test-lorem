import '../../helper/css/style.css'
import '../../helper/css/responsive.css'
import Header from './Components/Header'
import Section from './Components/Section'
import AboutSection from './Components/AboutSection'
import BeltSection from './Components/BeltSection'
import LoremSection from './Components/LoremSection'
import AccordianSection from './Components/AccordianSection'

export default function Home() {
  return (
    <main >
     <Header />
     <Section />
     <AboutSection />
     <BeltSection />
     <LoremSection />
     <AccordianSection />
      
    </main>
  )
}
