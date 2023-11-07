import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    
        <section class="hero">
            <h1>Welcome to My Website</h1>
            <p>Your go-to place for amazing content.</p>
            <a href="#" class="cta-button">Get Started</a>
        </section>
    
        <footer>
            <p>&copy; 2023 My Website. All rights reserved.</p>
        </footer>
    </body>
    </div>
  );
}

export default App;
