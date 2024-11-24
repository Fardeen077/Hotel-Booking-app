import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeCarouselone from './components/home/HomeCarouselone';
import Header from './components/header/Navbar';
import Booking from './pages/Booking';
import Room from './pages/Room';
import ContactUs from './pages/ContactUs';
import Team from './pages/Team';
import Footer from './components/Footer/Footer';
import Testimonial from './pages/Testimonial';
import About from './pages/About';
import Benefit from './pages/Benefit';
import { ThemeProvider } from "@/components/theme/ThemeProvider"
import ProFile from './pages/ProFile';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeCarouselone />} />
          <Route path="booking" element={<Booking />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="benefit" element={<Benefit />} />
          <Route path="about" element={<About />} />
          <Route path="room" element={<Room />} />
          <Route path="profile" element={<ProFile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
        </ThemeProvider>

  );
}

export default App;

