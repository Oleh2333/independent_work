import { Box, CssBaseline, Toolbar, Switch } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotesPage from "./pages/NotesPage/NotesPage";
import TodoPage from "./pages/TodoPage/TodoPage";

function App() {
  const [themeMode, setThemeMode] = useState(false);

 
  const theme = createTheme({
    palette: {
      mode: themeMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Box sx={{ mb: 4 }}> 
          <Switch
            checked={themeMode}
            onChange={() => setThemeMode(!themeMode)}
            color="default"
          />
        </Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
