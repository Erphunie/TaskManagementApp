import { Route, Routes } from "react-router-dom";
import ThemeContextProvider from "./context/theme.provider";
import AuthPage from "./pages/Auth/auth.index";
import { HomePage } from "./pages/Home/home.index";
import TasksPage from "./pages/Tasks/tasks.index";

function App() {
    return (
        <ThemeContextProvider>
            <Routes>
                <Route element={<HomePage />} path="/" />
                <Route element={<AuthPage />} path="/auth" />
                <Route element={<TasksPage />} path="/tasks" />
            </Routes>
        </ThemeContextProvider>
    );
}

export default App;
