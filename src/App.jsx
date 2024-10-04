import { Routes, Route } from "react-router-dom";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import Home from "./pages/Home";
import Support from "./pages/Support";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function App() {
  return (
     <div className="px-4">
         <ToastContainer />
          <Navbar />
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/support" element={<Support />} />
             </Routes>
          <Footer />
          
    </div>
  )
}
