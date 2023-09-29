import { Container, Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import Navbar from "./components/Navbar";
import MyRoutes from "./utils/MyRoutes";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

function App() {
  const theme = useTheme()
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{direction: 'rtl'}}>
      <Box className="bg-neutral-50">
          {onlySmallScreen ? <MobileNav/> : <Navbar/>}
          <MyRoutes/>
          {/* <Footer/> */}
      </Box>
    </div>
  );
}

export default App;
