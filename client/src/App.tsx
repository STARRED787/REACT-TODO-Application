import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
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
