import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-background text-text-color">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 