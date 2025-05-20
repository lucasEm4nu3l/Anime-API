import type { Characters } from "../util/characters"

 const Card = ({  mal_id, title, images, name, url}: Characters) => {
  return (
    <div>
         <div key={mal_id} style={{
            color: "white",
            backgroundColor: "#1a1a2e",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.5",
            transition: "transform 0.2s",
            padding: "1rem",
            cursor: "pointer",
            width: 200,
         }}>
            <img src={images.jpg.image_url} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3 style={{ marginTop: "0.5rem", color: "#1f80e0" }}>{title}</h3>
            <p style={{
               color: "white",
               fontStyle: "bold",
            }}>{name}</p>
            <a style={{
            textDecoration: "none",
            color: "#696969",
            fontStyle: "bold",
            }} href={url}>Sobre o Anime</a>
         </div>
    </div>
  )
}

export default Card