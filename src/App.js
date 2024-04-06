import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Outlet />
      <CssBaseline />
      <Footer />
    </div>
  );
}

export default App;