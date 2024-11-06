import { useEffect } from "react";
import "./Sidebar.css"
import { Link } from 'react-router-dom';


const Sidebar = ()=>{
  useEffect(()=>{
    const sidebarContainerElement = document.getElementById("Sidebar-container")
    
    window.SidebarOpen = ()=>{
      sidebarContainerElement.classList.remove("hidden")
    }

    window.SidebarClose = ()=>{
      sidebarContainerElement.classList.add("hidden")
    }

    return ()=>{
      delete window.SidebarOpen
    }
  },[])
  return(
    <div className="Container">
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cd" onClick={()=>window.SidebarClose()}>CD</Link>

      </div>
    </div>
  )
}

export default Sidebar