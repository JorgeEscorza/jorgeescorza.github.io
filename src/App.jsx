import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
        <main>
            <Router>

                <Routes>
                    <Route path="/" element={<Home />}/>
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