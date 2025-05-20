

import { Link } from "react-router-dom"

export const Header = () => {
  return (
        <header style={{
            backgroundColor: "#DC143C",
            padding: "2rem",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "25px",
             
        }}>
            <img src="../../public/XwI4.gif" style={{
                width: "6.25rem",
                alignItems: "center",   
            }}/>
            <nav style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                padding: "1rem",
            }}>
            <Link style={{
                textDecoration: "none",
                color: "inherit",    
            }}  to={"/"}>Home</Link>
            <Link style={{
                textDecoration: "none",
                color: "inherit",    
            }} to={"/sobre"}>Sobre</Link>
            <Link style={{
                textDecoration: "none",
                color: "inherit",    
            }} to={"/contato"}>Contato</Link>
            </nav>
            
        </header>
  )
}
