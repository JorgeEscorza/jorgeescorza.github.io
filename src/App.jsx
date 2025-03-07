import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import BackgroundVideo from "./components/BackgroundVideo";
import HeaderVideo from "./components/HeaderVideo";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
        <main>
            <Router>
                <BackgroundVideo />
                <Navbar />
                <HeaderVideo />
                <Hero />
                <Routes>
                    <Route path="/" element={"Home"}/>
                    <Route path="/about" element={"About"}/>
                    <Route path="/projects" element={"Projects"}/>
                    <Route path="/contact" element={"Contact"}/>
                </Routes>
            </Router>
        </main>
  </div>
  )
}

export default App