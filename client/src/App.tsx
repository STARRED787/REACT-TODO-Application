import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-white">
          <Routes>
            {/* Default route for the root ('/') shows the SignIn component */}
            <Route path="/" element={<SignIn />} />

            {/* Route for the SignUp page */}
            <Route path="/signup" element={<SignUp />} />

            {/* Redirect any undefined routes to SignIn */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
