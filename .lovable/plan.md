
# Site Corporativo — JEVA Engenharia Florestal

Site one-page de alto padrão para a JEVA, posicionando Itabira Sanches e a empresa como autoridade em regularização ambiental e fundiária no Pará. Visual misto (hero escuro tipo concreto + seções claras), microinterações modernas, hover com fotos e carrossel.

## Identidade visual
- **Paleta**: verde JEVA (escuro e claro extraídos da logo) + tom concreto/grafite + off-white. Tudo via design system (HSL tokens em `index.css` + `tailwind.config.ts`).
- **Tipografia**: títulos em fonte display moderna (ex.: Sora/Space Grotesk), corpo em Inter.
- **Logo**: imagem enviada usada no header e footer.
- **Tom**: técnico, confiável, ecológico, "última geração" — gradientes sutis, grão de concreto leve no hero, sombras suaves, cantos arredondados médios.

## Estrutura (one-page com âncoras)

1. **Header fixo translúcido** — logo JEVA, menu (Início, Sobre, Serviços, CEO, Atuação, Depoimentos, Contato), botão "Fale no WhatsApp", versão mobile com sheet menu.

2. **Hero (fundo escuro concreto)**
   - Headline forte: "Regularização ambiental e fundiária para o seu imóvel rural no Pará."
   - Subhead curto + 2 CTAs (Solicitar diagnóstico / Ver serviços).
   - Selos: "Desde 2017", "Atendimento em todo o Pará", "Engenharia Florestal".
   - Background: imagem de floresta amazônica com overlay escuro + leve animação parallax.

3. **Faixa de números (claro)** — anos de atuação, imóveis regularizados, hectares mapeados, municípios atendidos (placeholders editáveis, com contador animado).

4. **Sobre a JEVA (claro)**
   - Texto institucional + missão/visão/valores em mini-cards.
   - Imagem lateral (placeholder) com efeito hover de zoom/troca.

5. **Serviços — 4 cards principais (fundo escuro)**
   - CAR + Georreferenciamento
   - Titulação + Regularização Fundiária
   - Licenciamento Ambiental + PRA
   - Geoprocessamento + Laudos + DAP/CAF
   - Cada card: ícone, título, descrição curta, lista de subitens, hover com elevação/brilho verde e troca de foto de fundo (efeito "rover com fotos" pedido).

6. **Carrossel de projetos/galeria (claro)**
   - Carrossel (Embla via shadcn) com fotos placeholder de campo: drone, GPS geodésico, mapas, equipe em campo. Setas, dots e auto-play suave.

7. **CEO — Itabira Sanches (faixa escura com destaque)**
   - Foto placeholder em destaque, nome, formação (Engenharia Florestal), especialidades (ambiental, fundiária, geoprocessamento, georreferenciamento, titulação), mini-bio.
   - Cards de credenciais/áreas de expertise ao lado.

8. **Área de atuação (claro)**
   - Card com mapa do Pará destacando Rurópolis (sede) e mensagem "Atendemos todo o estado do Pará".
   - Lista de regiões/municípios atendidos com chips.

9. **Processo de trabalho (escuro)** — 4 passos: Diagnóstico → Levantamento em campo → Documentação técnica → Entrega e protocolo. Timeline visual.

10. **Depoimentos (claro)** — carrossel de cards com cliente, cargo/propriedade, citação. Placeholders.

11. **FAQ (claro)** — accordion com perguntas comuns: "Preciso de CAR?", "Quanto tempo leva o georreferenciamento?", "Como funciona a titulação no ITERPA?", etc.

12. **CTA + Contato (escuro premium)**
    - Formulário (nome, telefone, e-mail, assunto, mensagem) — apenas frontend com toast de confirmação (sem backend nesta fase).
    - Bloco lateral: telefone, e-mail, WhatsApp, endereço Rurópolis-PA, horário, redes sociais — todos placeholders marcados como `[EDITAR]`.

13. **Footer** — logo, breve descrição, links de navegação, contatos resumidos, copyright JEVA Engenharia Florestal © 2017–2026.

## Componentes e interações
- shadcn/ui: Button, Card, Accordion, Carousel, Sheet, Form, Tabs, Tooltip, Sonner (toasts).
- Animações: fade/slide-up no scroll (IntersectionObserver), hover lift nos cards, troca de imagem nos cards de serviço, contador animado nas estatísticas, parallax leve no hero.
- Botão flutuante de WhatsApp (canto inferior direito).
- Totalmente responsivo (mobile-first), dark/light por seção (não toggle global).
- SEO: title, meta description, Open Graph, semântica correta, alt texts.

## Conteúdo
- Todos os textos serão escritos em português, profissionais e específicos do nicho (CAR, SIGEF, ITERPA, SEMAS-PA, INCRA), prontos para você revisar.
- Fotos: placeholders de banco livre (Unsplash) coerentes com o tema (floresta, campo, drone, mapas).
- Dados de contato e números: placeholders claramente marcados para você substituir depois.

## Fora do escopo desta primeira entrega
- Backend / envio real do formulário (pode ser adicionado depois com Lovable Cloud).
- Blog e páginas internas (estrutura é one-page).
- Integração com Google Analytics / pixel (adicionar quando tiver as chaves).
