import "../Pages.css"
import "./Home.css"
import Logo from "ASSETS/d-logo.png"
const Home = () => {

  console.log("Home", Logo);
  
  
  return (
    <div className="HC">
      <h1>Home Page</h1>
      <p>This is the Home Page.</p>
      <img src={Logo} alt="log" width={50} height={50} />
    </div>
  );
};

export default Home;
