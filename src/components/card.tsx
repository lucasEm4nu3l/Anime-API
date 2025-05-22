import type { Characters } from "../util/characters";

const Card = ({ mal_id, title, images, name, url }: Characters) => {
  return (
    <div>
      <div
        key={mal_id}
        style={{
          color: "white",
          backgroundColor: "#1a1a2e",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.5",
          transition: "transform 0.2s",
          padding: "1rem",
          cursor: "pointer",
          width: 220,
          height: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            margin: "auto",
          }}
        >
          <img
            src={images.jpg.image_url}
            alt={title}
            style={{ width: "100%", borderRadius: "10px" }}
          />

          <h3 style={{ marginTop: "0.5rem", color: "#1f80e0" }}>{title}</h3>

          <p
            style={{
              color: "white",
              fontWeight: "bold",
              margin: "0.5rem 0",
            }}
          >
            {name}
          </p>

          <a
            href={url}
            style={{
              textDecoration: "none",
              color: "#bbb",
              fontWeight: "bold",
            }}
          >
            Sobre o Anime
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
