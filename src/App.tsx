import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { MenuSection } from './components/sections/MenuSection'
import { GallerySection } from './components/sections/GallerySection'
import { LocationSection } from './components/sections/LocationSection'
import { HoursSection } from './components/sections/HoursSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <LocationSection />
        <HoursSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
