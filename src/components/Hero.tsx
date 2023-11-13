import '../styles/Hero.css';  // Import a CSS file for styling (create this file)

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to [Your Basketball League]</h1>
        <p>Experience the thrill of competitive basketball with our easy-to-use fixture web app.</p>
        <button className="hero-button">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
