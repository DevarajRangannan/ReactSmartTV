import "../Pages.css"
import "./CD.css"
import { Link } from 'react-router-dom';

const CD = () => {

  console.log("CD");
  
  
  return (
    <div className="CD">
      <h1>Content Detail Page</h1>
      <p>This is the Content Detail Page.</p>
      <Link to={"/"} onClick={()=>{window.SidebarOpen()}}>Home</Link>
    </div>
  );
};

export default CD;
