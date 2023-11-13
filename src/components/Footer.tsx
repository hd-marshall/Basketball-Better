import './Footer.css'

interface FooterProps {
    companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
    return (
        <footer>
          <div>
            <p>&copy; {new Date().getFullYear()} {companyName}</p>
          </div>
        </footer>
    );
}

export default Footer;