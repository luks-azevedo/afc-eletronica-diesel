# AFC Eletrônica Diesel — notas do projeto

Site da AFC Eletrônica Diesel (Conselheiro Lafaiete – MG), criado a partir do `apresenta-template`.
Instruções gerais de uso, build e publicação: ver `README.md`.

## Onde está cada coisa

| O quê | Arquivo |
| --- | --- |
| Dados (endereço, WhatsApp, horários, Instagram, coordenadas) e slogan | `src/config/site.ts` |
| Cores e fontes (tema `afc`) | `src/config/theme.ts` |
| Serviços, veículos, marcas, etapas, FAQ, fotos | `src/data/afc.ts` |
| Logotipo circular (recortado do JPG enviado) | `public/images/logo-afc.png` |
| Fotos (placas e nome de terceiros desfocados) | `src/assets/images/fachada-*.jpg` |
| Favicon, ícone iOS, imagem de compartilhamento | `public/favicon.png`, `public/icons/`, `public/images/og-default.png` |

## Identidade

Cores do logotipo: azul-marinho `#012061` e vermelho `#E60118`. Estilo moderno e premium
inspirado nas referências (Volvo Trucks, VW Caminhões): fotos em tela cheia com sobreposição
azul-marinho, tipografia Archivo + Inter, botões retos.

## Decisões

- **Slogan criado pelo estúdio** (o briefing pediu uma sugestão): "Diagnóstico preciso para quem não pode parar." — confirmar com o cliente.
- Placa do Scania, placa da picape e parte do nome de uma empresa na cabine do caminhão branco foram desfocadas.
- Marcas atendidas (Mercedes-Benz, Scania, Volvo) aparecem só em texto, sem logotipos das montadoras.

## Pendências com o cliente

- [ ] Aprovar o slogan.
- [ ] Logotipo em alta / vetorial (o atual é o JPG 1080 px do Instagram).
- [ ] Mais fotos: oficina por dentro, laboratório de injeção, equipamentos de diagnóstico, equipe.
- [ ] Serviço carro-chefe, atendimento a frotas, garantia, pátio para carretas, socorro (briefing em branco).
- [ ] Formas de pagamento, e-mail (opcionais).
- [ ] **Domínio/URL final** → preencher `domain` em `site.ts`.
