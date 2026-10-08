import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/auth.index";
import { HomePage } from "./pages/Home/home.index";

function App() {
    return (
        <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Auth />} path="/auth" />
        </Routes>
    );
}

export default App;
