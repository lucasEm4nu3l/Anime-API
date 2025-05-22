import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header
      style={{
        backgroundImage: "url('/public/79075d5a8667cafe0845b3333cc42ebc.jpg')",
        padding: "2rem",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "25px",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          padding: "1rem",
          backgroundColor: "#040714",
          width: "25%",
          alignItems: "center",
          marginLeft: "38%",
          boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
          borderRadius: "8px",
          opacity: "70%",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to={"/"}
        >
          Home
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to={"/sobre"}
        >
          Sobre
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to={"/contato"}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
};
