import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Sidebar from './Components/Sidebar/Sidebar';
import CD from './Pages/CD/CD';

function App() {
  return (
    <div className='App-container'>
    
      <Router>
        <div className='Sidebar-container' id='Sidebar-container'>
          <Sidebar/>
        </div>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/contact' element={ <Contact/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/cd' element={ <CD/> }/>
        </Routes>
        

        {/* <div className={styles.container}>
          <AnimatedRoutes/>
        </div> */}

      </Router>
    </div>
  );
}

export default App;
