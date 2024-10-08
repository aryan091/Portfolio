import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  
  return (
    <div className="App overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 custom-scrollbar  ">
      <div className=" fixed top-0 z-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] custom-scrollbar"></div>
      <div className="relative z-10">
        <div className=" container mx-auto px-8 custom-scrollbar lg:mx-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
