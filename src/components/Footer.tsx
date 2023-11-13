import { Link } from 'react-router-dom';
import '../styles/Footer.css';

interface FooterProps {
    companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="footer-header-logo">Basketball Better</div>
        <span>&copy;</span>
      </div>
      <div className="footer-right">
        {/* Generic headers */}
        <Link className="header-option" to='/'>Home</Link>
        <Link className="header-option" to='/about'>About</Link>
        <Link className="header-option" to='/contact'>Contact</Link>
        <div className="footer-header">Privacy Policy</div>
        <div className="footer-header">Terms of Use</div>
        {/* Add more headers as needed */}
      </div>
    </footer>
  );
}

export default Footer;