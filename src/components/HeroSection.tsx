import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center space-y-8 py-20">
          {/* Main Content */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Caio Silva
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Desenvolvedor Web
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Especializado em criar interfaces modernas e funcionais com foco
              em experiência do usuário e soluções escaláveis
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button
              onClick={onExploreClick}
              variant="outline"
              size="lg"
              className="group gap-2 hover:gap-3 transition-all duration-300 cursor-pointer"
            >
              Explorar
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
