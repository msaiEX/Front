import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import SemanticPage from "./pages/SemanticPage";
import NewsPage from "./pages/NewsPage";
import BoardPage from "./pages/BoardPage";
import AppOut from "./AppOut";
import MainPageDetail from "./pages/MainPageDetail";
import SemanticPageDetail from "./pages/SemanticPageDetail";
import NewsPageDetail from "./pages/NewsPageDetail";
import BoardPageDetail from "./pages/BoardPageDetail";

import "./css/style.css";
import UserProfile from "./pages/UserProfile";
import HomePage from './pages/HomePage';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppOut />}>
            <Route path="" element={<MainPage />} />
            <Route path="Login" element={<LoginPage />} />
            <Route path="My" element={<MyPage />} />
            <Route path="Semantic" element={<SemanticPage />} />
            <Route path="News" element={<NewsPage />} />
            <Route path="Board" element={<BoardPage />} />
            <Route path="Login" element={<LoginPage />} />
            <Route path="MainPageDetail" element={<MainPageDetail />} />
            <Route path="MainPageDetail/:id" element={<MainPageDetail />} />
            <Route path="SemanticPageDetail" element={<SemanticPageDetail />} />
            <Route
              path="SemanticPageDetail/:id"
              element={<SemanticPageDetail />}
            />
            <Route path="NewsPageDetail" element={<NewsPageDetail />} />
            <Route path="NewsPageDetail/:id" element={<NewsPageDetail />} />
            <Route path="BoardPageDetail" element={<BoardPageDetail />} />
            <Route path="UserProfile" element={<UserProfile />} />
          </Route>
          <Route path="/Home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
