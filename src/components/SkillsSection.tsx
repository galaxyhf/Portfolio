import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Palette, Database, Wrench } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      skills: [
        { name: 'HTML5', level: 'Avançado' },
        { name: 'CSS3', level: 'Avançado' },
        { name: 'JavaScript', level: 'Intermediário' },
        { name: 'TypeScript', level: 'Intermediário' },
      ],
    },
    {
      icon: Palette,
      title: 'Frameworks & Libs',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      skills: [
        { name: 'React', level: 'Intermediário' },
        { name: 'Vite', level: 'Intermediário' },
        { name: 'TailwindCSS', level: 'Intermediário' },
      ],
    },
    {
      icon: Database,
      title: 'Backend & Database',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      skills: [
        { name: 'Python', level: 'Básico' },
        { name: 'Node.js', level: 'Básico' },
        { name: 'PostgreSQL', level: 'Básico' },
      ],
    },
    {
      icon: Wrench,
      title: 'Ferramentas',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      skills: [
        { name: 'Git', level: 'Intermediário' },
        { name: 'Docker', level: 'Básico' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Habilidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/badge">
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        <span className="flex items-center gap-2">
                          {skill.name}
                          <span className="text-xs opacity-70">
                            • {skill.level}
                          </span>
                        </span>
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Sempre aprendendo e explorando novas tecnologias
          </p>
        </div>
      </div>
    </section>
  );
}
