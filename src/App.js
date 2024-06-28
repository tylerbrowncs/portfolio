import './App.css';
import Navbar from './Navbar';
import Frontpage from './pages/Frontpage';

function App() {
  return (
    // Background Image: Nick Fewings's
    <div className="App">
      <nav>
        <Navbar />
      </nav>

      <div className="content">
        <Frontpage />

      </div>
    </div>
  );
}

export default App;
