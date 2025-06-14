import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PapiGrillingCui from "./Papi_Grilling_Cui.jpg";
import PapiConFamilia from "./Papi_Con_Familia.jpg";
import PapiEnParty from "./Papi_En_Party.jpg";
import Papi from "./Papi.jpg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8B4513", // Cuenca brick brown
    },
    secondary: {
      main: "#4A90E2", // Cathedral blue
    },
    background: {
      default: "linear-gradient(135deg, #F5E6D3 0%, #E8D5B7 50%, #D4C4A8 100%)",
    },
    text: {
      primary: "#2C1810",
      secondary: "#5D4E37",
    },
  },
  typography: {
    fontFamily:
      '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const FloatingEmoji = ({
  emoji,
  delay = 0,
}: {
  emoji: string;
  delay?: number;
}) => (
  <motion.div
    initial={{
      y: -100,
      x:
        Math.random() *
        (typeof window !== "undefined" ? window.innerWidth : 1000),
      rotate: 0,
    }}
    animate={{
      y: typeof window !== "undefined" ? window.innerHeight + 100 : 1000,
      x:
        Math.random() *
        (typeof window !== "undefined" ? window.innerWidth : 1000),
      rotate: 360,
    }}
    transition={{
      duration: 12 + Math.random() * 8,
      repeat: Infinity,
      ease: "linear",
      delay: delay,
    }}
    style={{
      position: "fixed",
      fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
      zIndex: 1,
      pointerEvents: "none",
    }}
  >
    {emoji}
  </motion.div>
);

const App: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe: true,
    touchMove: true,
  };

  const images = [Papi, PapiGrillingCui, PapiConFamilia, PapiEnParty];

  const emojis = [
    "⚽",
    "🥊",
    "👨‍👦",
    "🏆",
    "⚽",
    "🥊",
    "💙",
    "🎯",
    "⭐",
    "🌟",
    "❤️",
    "👑",
    "🥅",
    "⚽",
    "🥊",
    "⚽",
    "🥊",
    "⚽",
  ];

  const message = `Querido Fausto,

It's been a very difficult couple of years for all of us, especially for Abby. Tu hija que te quiere más que todo.

I want to thank you so much for giving me your blessing. I wish you knew how much it hurts me you not being here and being able to go to you about things. I am forever grateful for you and your blessing. Forever grateful for accepting me into this beautiful family.

If it wasn't for you and the love of your beautiful daughter, I don't think I would continue being here. Part of this beautiful family and culture. I loved visiting Cuenca and seeing where you spent your time, it was beautiful. I wanted to stay there forever. Ecuador is so far my top place to want to move once I am done with my time here in the United States.

I know you can see the hard time me and Abby go through and I really hope you know I do not do things to purposely hurt her or anything. I really want to be with her forever and every time I think about the times I hurt her, I think about how ashamed I am for disrespecting her and your blessing.

I will do anything for Abby and Danny and Zion. I wish you are able to spend time with him, but I know you are in him every second of the day. You will forever be in my heart and you will forever be my God in this family. Your love for family togetherness inspires me. I want to continue that legacy and will. Either here in the United States or outside.

Todos aquí te amarán por siempre. Siempre te amaré y respetaré tus bendiciones. No voy a romper eso y constantemente me recuerdo a mí mismo lo increíble que eres como padre. Me bendijiste con la mujer más hermosa del universo y una hija hermosa. También me bendijiste con Danny. Ahora tenemos a Zion, lo cual también es una bendición. Eres la definición de los valores fundamentales de la familia y mantendré vivo ese legado. Te amo y feliz Día del Padre.

Con todo mi amor y gracias por todo,
Alex`;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Emoji overlay, always above content */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
        {emojis.map((emoji, i) => (
          <FloatingEmoji key={i} emoji={emoji} delay={i * 2} />
        ))}
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #F5E6D3 0%, #E8D5B7 30%, #D4C4A8 70%, #C4A484 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Box sx={{ py: { xs: 2, sm: 6 } }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Typography
                  variant="h1"
                  align="center"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
                    fontWeight: 700,
                    background:
                      "linear-gradient(45deg, #8B4513 30%, #4A90E2 90%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    mb: { xs: 3, md: 6 },
                    fontFamily: '"Playfair Display", serif',
                  }}
                >
                  Feliz Día del Padre
                </Typography>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Paper
                  elevation={12}
                  sx={{
                    p: { xs: 1.5, sm: 3, md: 5 },
                    mb: { xs: 2, md: 4 },
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(139, 69, 19, 0.1)",
                    position: "relative",
                    zIndex: 1,
                    boxShadow: "0 20px 40px rgba(139, 69, 19, 0.15)",
                  }}
                >
                  <Box sx={{ mb: { xs: 2, md: 5 } }}>
                    <Slider {...settings}>
                      {images.map((image, index) => {
                        let className = "";
                        if (image === PapiGrillingCui)
                          className = "carousel-img-grilling";
                        else if (image === PapiConFamilia)
                          className = "carousel-img-familia";
                        else if (image === PapiEnParty)
                          className = "carousel-img-party";
                        else if (image === Papi)
                          className = "carousel-img-papi";
                        return (
                          <Box key={index} sx={{ px: { xs: 0, sm: 1 } }}>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                            >
                              <img
                                src={image}
                                alt={`Personal ${index + 1}`}
                                className={className}
                                style={{
                                  width: "100%",
                                  height:
                                    window.innerWidth < 600 ? "220px" : "450px",
                                  objectFit: "cover",
                                  objectPosition:
                                    image === Papi
                                      ? "center 10%"
                                      : "center center",
                                  borderRadius: "16px",
                                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                }}
                              />
                            </motion.div>
                          </Box>
                        );
                      })}
                    </Slider>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: "pre-line",
                      lineHeight: { xs: 1.5, md: 2 },
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                      color: "text.primary",
                      fontFamily: '"Playfair Display", serif',
                      textAlign: "justify",
                      "& p": {
                        mb: 2,
                      },
                    }}
                  >
                    {message}
                  </Typography>
                </Paper>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    p: { xs: 1, sm: 3 },
                    borderRadius: 3,
                    background:
                      "linear-gradient(45deg, rgba(139, 69, 19, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%)",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.secondary",
                      fontStyle: "italic",
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "1.1rem",
                    }}
                  >
                    Creado con amor desde la hermosa Cuenca, Ecuador 🇪🇨
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
