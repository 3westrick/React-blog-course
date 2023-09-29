import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#6666FF',
          dark: '#5151ee',
          contrastText: '#fff',
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
          mobile: 0,
          tablet: 640,
          laptop: 1070,
          desktop: 1150,
        },
      },
  });

  export default theme
