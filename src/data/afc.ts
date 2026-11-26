/**
 * Conteúdo das páginas da AFC Eletrônica Diesel.
 * Fonte: briefing do cliente (serviços, veículos e marcas marcados pelo dono).
 */
import Cpu from '@lucide/astro/icons/cpu';
import Fuel from '@lucide/astro/icons/fuel';
import Leaf from '@lucide/astro/icons/leaf';
import Wrench from '@lucide/astro/icons/wrench';
import Truck from '@lucide/astro/icons/truck';
import Container from '@lucide/astro/icons/container';
import BusFront from '@lucide/astro/icons/bus-front';
import Van from '@lucide/astro/icons/van';
import CalendarCheck from '@lucide/astro/icons/calendar-check';
import ScanLine from '@lucide/astro/icons/scan-line';
import ClipboardCheck from '@lucide/astro/icons/clipboard-check';
import KeyRound from '@lucide/astro/icons/key-round';

import fachadaScania from '../assets/images/fachada-scania.jpg';
import fachadaCaminhao from '../assets/images/fachada-caminhao.jpg';
import fachadaPicape from '../assets/images/fachada-picape.jpg';
import type { ContentImage, FAQItem, FeatureItem, ServiceItem } from '../types/content';

export const photos = {
  hero: { src: fachadaScania, alt: 'Cavalo mecânico Scania em frente à oficina da AFC Eletrônica Diesel' } satisfies ContentImage,
  caminhao: { src: fachadaCaminhao, alt: 'Caminhão estacionado em frente à AFC Eletrônica Diesel' } satisfies ContentImage,
  picape: { src: fachadaPicape, alt: 'Fachada azul da AFC Eletrônica Diesel com a picape da empresa' } satisfies ContentImage,
};

export const gallery: ContentImage[] = [photos.hero, photos.caminhao, photos.picape];

export const services: ServiceItem[] = [
  {
    id: 'eletronica',
    icon: Cpu,
    title: 'Eletrônica embarcada',
    description: 'Diagnóstico e reparo dos sistemas eletrônicos que gerenciam o motor e o câmbio.',
    details: [
      'Diagnóstico com scanner',
      'Gerenciamento eletrônico do motor',
      'Eletrônica do câmbio',
      'Reparo de módulos (ECU, painel, câmbio)',
      'Programação e parametrização de módulos',
      'Sensores e atuadores',
      'Elétrica geral: chicotes, iluminação, alternador e motor de partida',
      'Tacógrafo',
    ],
  },
  {
    id: 'injecao',
    icon: Fuel,
    title: 'Injeção diesel',
    description: 'Teste, reparo e manutenção dos componentes de injeção.',
    details: [
      'Bicos injetores: teste, limpeza e reparo',
      'Bombas injetoras e bomba de alta pressão',
      'Sistemas common rail',
      'Unidades injetoras (UI/UP)',
    ],
  },
  {
    id: 'emissoes',
    icon: Leaf,
    title: 'Arla 32 e emissões',
    description: 'Diagnóstico e manutenção dos sistemas de pós-tratamento.',
    details: ['Sistema Arla 32 / SCR', 'DPF (filtro de partículas)', 'EGR'],
  },
  {
    id: 'mecanica',
    icon: Wrench,
    title: 'Mecânica e ar-condicionado',
    description: 'Serviços complementares para manter o veículo rodando.',
    details: ['Mecânica geral', 'Freios', 'Ar-condicionado'],
  },
];

export const vehicles: FeatureItem[] = [
  { icon: Truck, title: 'Caminhões leves e médios', description: 'Diagnóstico, módulos e injeção para caminhões leves e médios.' },
  { icon: Container, title: 'Caminhões pesados', description: 'Cavalos mecânicos e caminhões pesados.' },
  { icon: BusFront, title: 'Ônibus e micro-ônibus', description: 'Eletrônica e injeção para ônibus e micro-ônibus.' },
  { icon: Van, title: 'Vans e utilitários diesel', description: 'Vans e utilitários com motor diesel.' },
];

export const brands = ['Mercedes-Benz', 'Scania', 'Volvo'];

export const steps: FeatureItem[] = [
  { icon: CalendarCheck, title: 'Agende pelo WhatsApp', description: 'Informe o veículo e o que está acontecendo.' },
  { icon: ScanLine, title: 'Diagnóstico', description: 'O veículo passa pela avaliação dos sistemas.' },
  { icon: ClipboardCheck, title: 'Orçamento', description: 'Você recebe o orçamento do serviço.' },
  { icon: KeyRound, title: 'Entrega', description: 'Serviço concluído, veículo liberado para rodar.' },
];

export const faq: FAQItem[] = [
  { question: 'Preciso agendar?', answer: 'Sim. O atendimento é agendado pelo WhatsApp (31) 99740-3594.' },
  {
    question: 'Quais veículos vocês atendem?',
    answer: 'Caminhões leves, médios e pesados, cavalos mecânicos, ônibus, micro-ônibus, vans e utilitários diesel.',
  },
  {
    question: 'Quais marcas vocês atendem?',
    answer: 'Mecatrônica diesel para veículos Mercedes-Benz, Scania e Volvo.',
  },
  {
    question: 'Qual o horário de funcionamento?',
    answer: 'De segunda a sexta, das 8h às 18h. Aos sábados e domingos a oficina fica fechada.',
  },
  {
    question: 'Onde fica a AFC?',
    answer: 'Na Av. Geraldo Plaza, 920, bairro Paulo VI, em Conselheiro Lafaiete – MG.',
  },
];
