import { Box, Container, Paper, Avatar, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LucasImg from "../assets/LucasE.png";
import MauImg from "../assets/LiliC.png";
import GioImg from "../assets/GioMC.png";
import JackImg from "../assets/jackson.png";
export const Contato = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#040714",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          mt: 15,
        }}
      >
        <Paper
          sx={{
            p: 6,
            textAlign: "center",
            backgroundColor: "rgba(33, 33, 33, 0.5)",
            color: "#fff",
          }}
        >
          <Avatar
            alt="Pessoa"
            src={LucasImg}
            sx={{
              width: 200,
              height: 200,
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography variant="h5">Lucas Emanuel B.</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <EmailIcon />
            <Typography>
              <Link
                href="mailto:lucasb.silva130@gmail.com"
                underline="none"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                E-mail
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>

      <Container
        maxWidth="sm"
        sx={{
          mt: 15,
        }}
      >
        <Paper
          sx={{
            p: 6,
            textAlign: "center",
            backgroundColor: "rgba(33, 33, 33, 0.5)",
            color: "#fff",
          }}
        >
          <Avatar
            alt="Pessoa"
            src={MauImg}
            sx={{
              width: 200,
              height: 200,
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography variant="h5">Maurelline C.</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <EmailIcon />
            <Typography>
              <Link
                href="mailto:maurelline.si@gmail.com"
                underline="none"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                E-mail
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>

      <Container
        maxWidth="sm"
        sx={{
          mt: 15,
        }}
      >
        <Paper
          sx={{
            p: 6,
            textAlign: "center",
            backgroundColor: "rgba(33, 33, 33, 0.5)",
            color: "#fff",
          }}
        >
          <Avatar
            alt="Pessoa"
            src={JackImg}
            sx={{
              width: 200,
              height: 200,
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography variant="h5">Jackson S.</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <EmailIcon />
            <Typography>
              <Link
                href="mailto:jacklima04@gmail.com"
                underline="none"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                E-mail
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>

      <Container
        maxWidth="sm"
        sx={{
          mt: 15,
        }}
      >
        <Paper
          sx={{
            p: 6,
            textAlign: "center",
            backgroundColor: "rgba(33, 33, 33, 0.5)",
            color: "#fff",
          }}
        >
          <Avatar
            alt="Pessoa"
            src={GioImg}
            sx={{
              width: 200,
              height: 200,
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography variant="h5">Giovanna M.</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <EmailIcon />
            <Typography>
              <Link
                href="mailto:giovannamccds@gmail.com"
                underline="none"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                E-mail
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
