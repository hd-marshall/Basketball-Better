// Home.tsx
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import Hero from '../components/Hero';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <div className="floating-container">
        <div className="info-block">
          <h3>Block 1</h3>
          <p>Information about Block 1 goes here.</p>
        </div>

        <div className="info-block">
          <h3>Block 2</h3>
          <p>Information about Block 2 goes here.</p>
        </div>

        <div className="info-block">
          <h3>Block 3</h3>
          <p>Information about Block 3 goes here.</p>
        </div>
      </div>

      <div className="home-container">
        <div className="about-us-container">
          <Link to="/about-us" className="about-us-link">
            About Us
          </Link>
        </div>

        <div className="search-container">
          <h2>Find a League</h2>
          <SearchBar />
        </div>

        {/* Add your home page content here */}
      </div>
    </div>
  );
};

export default Home;
