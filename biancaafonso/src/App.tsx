import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/home.tsx'
import About from './Pages/about.tsx';
import Work from './Pages/work.tsx';
import ThemeToggle from './Components/themeToggle/ThemeToggle.tsx';
import Header from './Components/header/header.tsx';

function App() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
