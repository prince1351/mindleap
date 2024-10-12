import About from "./components/About"

import Contact from './components/Contact.jsx';
import Footer from "./components/Footer.jsx";

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import WorkingStep from "./components/WorkingStep"



const App = () => {
  return (
    <div className="font-primary overflowx-x-hidden">
   <Navbar />
   <Hero />
    <Services />
    <About />
    <WorkingStep />
    <Pricing />
    <Testimonials />
    <Contact />
    <Footer />
    </div>
  )
}

export default App