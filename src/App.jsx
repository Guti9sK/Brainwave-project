import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./componentes/Benefits";
import Collaboration from "./componentes/Collaboration";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Pricing from "./componentes/Pricing";
import Roadmap from "./componentes/Roadmap";
import Services from "./componentes/Services";
const App = () => {
  return (
    <>
      <div className="pt-[4.75em] lg:pt-[5.25em] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration/>
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
