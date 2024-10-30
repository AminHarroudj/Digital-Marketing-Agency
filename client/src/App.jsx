import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Team from "./components/Team";
import ClientSay from "./components/ClientSay";
import Footer from "./components/Footer";
import bg from "./assets/bg.jpg"

function App() {
  return (
    <>
      <div className="bg-[#f6f4f1]">
        <div style={{backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundSize:"cover"}}>
          <Navbar />
          <Home />
        </div>
        <About />
        <Services />
        <Work />
        <Team />
        <ClientSay />
        <Footer />
      </div>
    </>
  );
}

export default App;
