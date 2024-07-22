
import './App.css'
import Background from './componentes/background/Background'
import Home from './componentes/home/Home'
import Navbar from './componentes/navbar/Navbar'

function App() {

  return (
    <Background imageUrl="https://static.vecteezy.com/system/resources/previews/009/392/527/non_2x/web-page-on-a-laptop-screen-a-mobile-phone-is-lying-a-cloud-a-cloud-service-or-an-application-modern-technological-background-isometry-conceptual-banner-of-web-technologies-vector.jpg">
    <section className='app'>
      <Navbar />
      

    </section>
    </Background> 
  )
}

export default App
