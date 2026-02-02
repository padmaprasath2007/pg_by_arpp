import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import './index.css'

export default function App() {
  return (
    <div className="app-dark-bg">
      <Navbar />
      <main>
        {/* We remove Routes/Route for the FAQ and just render Home */}
        {/* Home should contain Hero, Partners, HowItWorks, and FAQ */}
        <Home />
      </main>
      <Footer />
    </div>
  )
}