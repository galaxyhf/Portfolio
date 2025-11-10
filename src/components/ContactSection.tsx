import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Mail,
  Instagram,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Enviando mensagem...' });

    try {
      // Envia o email usando EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Caio Silva', // Seu nome
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Responderei em breve.',
        });
        // Limpa o formulário
        setFormData({ name: '', email: '', message: '' });

        // Remove a mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setStatus({ type: 'idle', message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus({
        type: 'error',
        message:
          'Erro ao enviar mensagem. Tente novamente ou entre em contato pelas redes sociais.',
      });

      // Remove a mensagem de erro após 5 segundos
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:caiogsilva2005@gmail.com',
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-500/10',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/cai0_gs/',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/10',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/caio-silva-472498266',
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. Entre em
            contato!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Redes Sociais</h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card
                    className={`group hover:shadow-lg hover:-translate-x-2 transition-all duration-300 border-none ${link.bgColor}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-background">
                          <link.icon
                            className={`h-6 w-6 transition-colors duration-300 ${link.color}`}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{link.label}</p>
                          <p className="text-sm text-muted-foreground">
                            Conecte-se comigo
                          </p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Send className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={e =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Sua mensagem..."
                      rows={5}
                      value={formData.message}
                      onChange={e =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full group gap-2 cursor-pointer"
                    size="lg"
                    disabled={status.type === 'loading'}
                  >
                    {status.type === 'loading' ? (
                      <>
                        <div className="h-4 w-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {status.type === 'success' && (
                    <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">{status.message}</p>
                    </div>
                  )}

                  {status.type === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">{status.message}</p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
