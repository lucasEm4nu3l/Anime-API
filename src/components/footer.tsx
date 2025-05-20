

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#DC143C",
        padding: "1rem",
        color: "#fff",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",     
        gap: "1.5rem",            
      }}
    >
      <img
        src="../../public/6mh.gif"
        alt="icon"
        style={{
          width: "40px",
          height: "40px",
        }}
      />
      <p>&#169; Animes React - TFA 2025.1 :)</p>
    </footer>
  );
};

