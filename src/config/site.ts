/**
 * Dados da AFC Eletrônica Diesel.
 * Fonte: briefing preenchido pelo cliente (nov/2026) e Google Maps.
 */
import type { SiteConfig } from './types';

export const site: SiteConfig = {
  demo: false,
  name: 'AFC Eletrônica Diesel',
  legalName: '',
  cnpj: '',
  description:
    'Eletrônica embarcada, gerenciamento do motor e câmbio, injeção diesel e emissões para caminhões, ônibus e vans em Conselheiro Lafaiete.',
  segment: 'Eletrônica diesel',
  domain: '',
  logo: {
    src: '/images/logo-afc.png',
    srcInverted: '/images/logo-afc.png',
    alt: 'AFC Eletrônica Diesel',
    width: 256,
    height: 256,
    wordmark: 'AFC',
    tagline: 'Eletrônica Diesel',
  },
  favicon: '/favicon.png',
  contact: {
    phone: '',
    whatsapp: '5531997403594',
    whatsappMessage: 'Olá! Vim pelo site da AFC Eletrônica Diesel e gostaria de agendar um atendimento.',
    email: '',
    hours: 'Segunda a sexta, das 8h às 18h',
  },
  address: {
    street: 'Av. Geraldo Plaza, 920',
    district: 'Paulo VI',
    city: 'Conselheiro Lafaiete',
    state: 'MG',
    zip: '36406-380',
    mapsUrl:
      'https://www.google.com/maps/place/AFC+Eletr%C3%B4nica+diesel/@-20.6863637,-43.8001907,17z/data=!3m1!4b1!4m6!3m5!1s0xa1610d4ab05849:0x45b20b7954cd090d!8m2!3d-20.6863637!4d-43.8001907',
  },
  social: {
    instagram: 'https://www.instagram.com/afceletronicadiesel/',
    facebook: '',
    linkedin: '',
    youtube: '',
  },
  schemaType: 'AutoRepair',
  geo: { lat: -20.6863637, lng: -43.8001907 },
  openingHours: [
    { day: 'Mo', label: 'Segunda', hours: ['08:00', '18:00'] },
    { day: 'Tu', label: 'Terça', hours: ['08:00', '18:00'] },
    { day: 'We', label: 'Quarta', hours: ['08:00', '18:00'] },
    { day: 'Th', label: 'Quinta', hours: ['08:00', '18:00'] },
    { day: 'Fr', label: 'Sexta', hours: ['08:00', '18:00'] },
    { day: 'Sa', label: 'Sábado', hours: null },
    { day: 'Su', label: 'Domingo', hours: null },
  ],
  seo: {
    titleTemplate: '%s | AFC Eletrônica Diesel',
    defaultTitle: 'AFC Eletrônica Diesel — Eletrônica e injeção diesel em Conselheiro Lafaiete',
    defaultDescription:
      'Diagnóstico, módulos, injeção diesel, Arla 32 e mecânica para caminhões, ônibus e vans Mercedes-Benz, Scania e Volvo. Agende pelo WhatsApp.',
    ogImage: '/images/og-default.png',
    locale: 'pt_BR',
    language: 'pt-BR',
  },
};

/** Slogan criado pelo APRESENTA Studio (o cliente pediu uma sugestão) — confirmar. */
export const slogan = 'Diagnóstico preciso para quem não pode parar.';

export const whatsappMessages = {
  agendar: 'Olá! Vim pelo site da AFC Eletrônica Diesel e gostaria de agendar um atendimento.',
  orcamento: 'Olá! Gostaria de um orçamento. Veículo (marca/modelo/ano): ',
};
