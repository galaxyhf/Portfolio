import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="text-lg font-semibold tracking-tight hover:text-primary transition-colors"
              onClick={() => scrollToSection('hero')}
            >
              Caio Silva
            </Link>

            <div className="flex items-center gap-6">
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                Sobre
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('skills');
                }}
              >
                Habilidades
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contato
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection onExploreClick={() => scrollToSection('about')} />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Caio Silva. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
