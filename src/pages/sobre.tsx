import { Box, Paper, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

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
      <Paper
        elevation={3}
        sx={{
          width: "80%",
          maxWidth: 700,
          minHeight: "200px",
          p: 6,
          textAlign: "center",
          backgroundColor: "rgba(33, 33, 33, 0.8)",
          color: "#fff",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <InfoIcon fontSize="large" />
        </Box>
        <Typography variant="h6" textAlign="center" sx={{ fontSize: "1.25rem" }}>
          API feita para fornecer informações completas sobre animes, como título,
          sinopse, imagem, episódios, status e avaliações. Permite buscar animes por
          nome ou ID, facilitando a criação de catálogos e apps relacionados ao
          universo anime.
        </Typography>
      </Paper>
    </Box>
  );
};
