import './styles/App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer companyName='BasketballBetter' />
    </div>
  );
}

export default App;