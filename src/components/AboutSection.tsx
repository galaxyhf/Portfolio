import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Target, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Educação',
      description: 'Estudante de Ciência da Computação - UNIFESO',
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Tecnologia e inovação',
    },
    {
      icon: Target,
      title: 'Especialização',
      description: 'Interfaces modernas e funcionais',
    },
    {
      icon: Sparkles,
      title: 'Foco',
      description: 'UX/UI e soluções escaláveis',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar experiências digitais
            excepcionais
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Main Description */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 sm:p-12">
              <p className="text-lg leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto">
                Sou estudante de{' '}
                <span className="text-foreground font-semibold">
                  Ciência da Computação
                </span>{' '}
                no UNIFESO, movido por uma profunda paixão por tecnologia e
                inovação. Meu foco está em desenvolver
                <span className="text-foreground font-semibold">
                  {' '}
                  interfaces modernas e funcionais
                </span>
                , sempre priorizando a experiência do usuário e criando soluções
                escaláveis que fazem a diferença.
              </p>
            </CardContent>
          </Card>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-none"
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
