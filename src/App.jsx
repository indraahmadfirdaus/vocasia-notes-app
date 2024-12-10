import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";
import Guard from "./pages/Guard";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import UpdateProfile from "./pages/UpdateProfile";
import RegisterPage from "./pages/RegisterPage";


function App() {

  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route
              path="/login"
              element={<LoginPage />}
            />

            <Route
              path="/register"
              element={<RegisterPage />}
            />

            <Route
              path="/"
              element={<Guard><TaskPage /></Guard>}
            />

            <Route
              path="/update-profile"
              element={<Guard><UpdateProfile /></Guard>}
            />

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App