import { Link } from 'react-router-dom';
import '../styles/Content.css';  // Import a CSS file for styling (create this file)

const Content: React.FC = () => {
    return (
        <section className="content-wrapper">
            <div className="content-info">
                <h2>Content</h2>
                <p>info</p>
            </div>
            <div className='content-img'>
                
            </div>
        </section>
    );
};

export default Content;
