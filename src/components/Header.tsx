import '../styles/Header.css';  // Import a CSS file for styling (create this file)

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        {/* Navigation options on the left */}
        <div className="header-option">Home</div>
        <div className="header-option">About</div>
        <div className="header-option">Contact</div>
      </div>
      <div className="header-center">
        {/* Generic headers in the center */}
        <div className="header-header">Your Logo/Header</div>
      </div>
      <div className="header-right">
        {/* Sign In and Sign Up buttons on the far right */}
        <button className="header-button">Sign In</button>
        <button className="header-button">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
