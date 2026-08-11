import MainLayout from "./layouts/MainLayout";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Specialties from "./sections/Specialties";
import Approach from "./sections/Approach";
import Locations from "./sections/Locations";
import Booking from "./sections/Booking";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Specialties />
      <Approach />
      <Locations />
      <Booking />
      <FAQ />
      <Footer />
    </MainLayout>
  );
}

export default App;