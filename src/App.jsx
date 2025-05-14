import { BenefitsSection } from "./pages/benefits";
import { Contact } from "./pages/contact";
import { Footer } from "./pages/footer";
import { Header } from "./pages/header";
import { HeroSection } from "./pages/hero";
import { Services } from "./pages/servicing";
import { WhatsAppButton } from "./pages/wppButton";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <BenefitsSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
