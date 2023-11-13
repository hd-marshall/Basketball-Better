import './Footer.css'

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
        <div className="footer-header">About Us</div>
        <div className="footer-header">Contact</div>
        <div className="footer-header">Privacy Policy</div>
        {/* Add more headers as needed */}
      </div>
    </footer>
  );
}

export default Footer;