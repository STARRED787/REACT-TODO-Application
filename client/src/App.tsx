import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Default route for the root ('/') shows the SignIn component */}
          <Route path="/" element={<SignIn />} />

          {/* Route for the SignUp page */}
          <Route path="/signup" element={<SignUp />} />

          {/* Route for the Home page */}
          <Route path="/home" element={<Home />} />

          {/* Route for the NotFound page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
