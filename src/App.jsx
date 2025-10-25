import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/homePage.jsx";
import './styles/App.css';


function App() {
  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
    </>
  )
}

export default App
