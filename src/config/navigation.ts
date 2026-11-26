import type { NavigationConfig } from './types';

export const navigation: NavigationConfig = {
  main: [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ],
  cta: { label: 'Agendar atendimento', href: '/contato' },
  footer: [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', href: '/' },
        { label: 'Serviços', href: '/servicos' },
        { label: 'Sobre', href: '/sobre' },
        { label: 'Contato', href: '/contato' },
      ],
    },
    {
      title: 'Serviços',
      links: [
        { label: 'Eletrônica embarcada', href: '/servicos#eletronica' },
        { label: 'Injeção diesel', href: '/servicos#injecao' },
        { label: 'Arla 32 e emissões', href: '/servicos#emissoes' },
        { label: 'Mecânica e ar-condicionado', href: '/servicos#mecanica' },
      ],
    },
  ],
};
