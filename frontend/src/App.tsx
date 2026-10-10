import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/auth.index";
import { HomePage } from "./pages/Home/home.index";

function App() {
    return (
        <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AuthPage />} path="/auth" />
        </Routes>
    );
}

export default App;
