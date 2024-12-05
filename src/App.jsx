import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app-container' style={{ overflow: 'hidden', height: '100vh' }}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
