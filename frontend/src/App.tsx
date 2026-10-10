import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/auth.index";
import { HomePage } from "./pages/Home/home.index";
import TasksPage from "./pages/Tasks/tasks.index";

function App() {
    return (
        <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AuthPage />} path="/auth" />
            <Route element={<TasksPage />} path="/tasks" />
        </Routes>
    );
}

export default App;
