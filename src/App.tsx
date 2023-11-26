import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Ladder from './pages/Ladder';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ladder" element={<Ladder />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/timetable" element={<Ladder />} />
          {/* Add more routes for additional pages */}
        </Routes>
        <Footer companyName="BetterBasketball"/>
      </div>
    </Router>
  );
}

export default App;