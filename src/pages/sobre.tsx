import { Box, Container, Paper } from "@mui/material"


export const Sobre = () => {
return (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#040714",
    }}
  >
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, color: "#fff", backgroundColor: "#1a1a2e" }}>
        <p>
          API feita para fornecer informações completas sobre animes, como título, sinopse,
          imagem, episódios, status e avaliações. Permite buscar animes por nome ou ID,
          facilitando a criação de catálogos e apps relacionados ao universo anime.
        </p>
      </Paper>
    </Container>
  </Box>
);
}