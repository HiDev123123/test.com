import logo from './logo.svg';
// import './App.css';
import './css/Nav.css';
import './css/Main.css';
import './css/White.css';
import Navbar from './container/Navbar';
import Main from './container/Main';
import White from './container/White';
import About from './container/About';
import End from './container/End';





function App() {
  return (
    <div>
      <Navbar />      
      <Main />
      <White />
      <About />
      <End />
    </div>

  );
}

export default App;
