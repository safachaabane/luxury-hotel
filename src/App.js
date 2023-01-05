
import './App.css';
import Description from './Components/Description';
import Footer from './Components/Footer';
import Gallerie from './Components/Gallerie';
import Navbar from './Components/NavBar';
import Slogan from './Components/Slogan';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Slogan/>
    <Description/>
    <Gallerie/>
    <Footer/>
    </div>
  );
}

export default App;
