import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';

function App() {
  return (
    <Router>
			<nav style={{padding: "1rem", fontSize: "1.5rem"}}>
				<Link to="/">Home</Link> | <Link to="/contact">Contact</Link> | <Link to="/about">About</Link>
			</nav>

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='/about' element={ <About/> }/>
      </Routes>
      

			{/* <div className={styles.container}>
				<AnimatedRoutes/>
			</div> */}

		</Router>
  );
}

export default App;
