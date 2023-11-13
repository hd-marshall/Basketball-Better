import './App.css'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';

function App() {
  return (
    <body>
      <Header />
      <Hero />
      <Footer companyName='BasketballBetter' />
    </body>
  )
}

export default App