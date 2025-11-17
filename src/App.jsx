import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Learn from "./components/sections/Learn";
import Premium from "./components/sections/Premium";
import Reviews from "./components/sections/Reviews";
import Subscribe from "./components/sections/Subscribe";
import Teacher from "./components/sections/Teacher";
import Tracks from "./components/sections/Tracks";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Learn />
        <Tracks />
        <Premium />
        <Reviews />
        <Teacher />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
