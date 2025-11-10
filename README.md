# HairBooking - Plataforma SaaS para Salões de Beleza

![HairBooking](https://img.shields.io/badge/status-Em%20Desenvolvimento-yellow)
![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-blue)

## 🚀 Sobre o Projeto

HairBooking é uma plataforma SaaS revolucionária que conecta clientes aos melhores profissionais de beleza, oferecendo:

- ✨ **Agendamento Inteligente**: Sistema 24/7 com confirmação automática
- 🤖 **IA para Cortes Personalizados**: Análise facial para sugestões precisas
- 💎 **Planos Flexíveis**: Assinaturas mensais adaptadas ao seu estilo de vida
- 📍 **Múltiplas Localizações**: Rede de salões em todo o Brasil
- 🛡️ **Segurança Total**: Criptografia bancária para dados e pagamentos

## 🎨 Design & UX

- **Design Minimalista**: Interface limpa e profissional em tons neutros
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Acessibilidade**: Seguindo padrões WCAG para inclusão
- **Performance**: Carregamento rápido e animações fluidas

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 16.0.1** - Framework React com SSR/SSG
- **React 19.2.0** - Biblioteca para interfaces
- **TypeScript 5.x** - Tipagem estática
- **Tailwind CSS 4.x** - Framework CSS utilitário
- **Lucide React** - Ícones SVG otimizados
- **Framer Motion** - Animações fluidas

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS
- **Turbopack** - Bundler ultrarrápido do Next.js

## 📱 Funcionalidades Principais

### 🏠 Landing Page
- Hero section com proposta de valor clara
- Estatísticas de confiança (500+ salões, 10k+ clientes)
- Call-to-actions estratégicos

### ℹ️ Sobre a Plataforma
- Missão e valores da empresa
- Features principais com ícones
- Números de impacto

### ✂️ Serviços
- **Cortes Clássicos** (a partir de R$ 45)
- **Cortes Personalizados com IA** (a partir de R$ 85)
- **Coloração & Luzes** (a partir de R$ 120)
- **Tratamentos Capilares** (a partir de R$ 80)

### 💰 Planos de Assinatura

#### Essencial (R$ 89/mês)
- 2 cortes por mês
- Desconto de 15% em extras
- Agendamento prioritário

#### Premium (R$ 159/mês) - **Mais Popular**
- 4 cortes por mês
- 1 tratamento incluso
- IA ilimitada
- Desconto de 25% em extras

#### Unlimited (R$ 299/mês)
- Cortes ilimitados
- Todos os tratamentos inclusos
- Personal stylist dedicado
- Desconto de 50% em coloração

### 🗺️ Localização
- 3 unidades em São Paulo (Centro, Vila Madalena, Moema)
- Cobertura em 6 cidades (expansão para 8)
- Informações completas de cada unidade

### 📅 Sistema de Agendamento
- **Processo em 4 etapas**:
  1. Seleção de serviço
  2. Escolha de local e profissional
  3. Data e horário
  4. Dados pessoais e confirmação

### 💬 Depoimentos
- 6 testimoniais reais de clientes
- Avaliações 5 estrelas
- Diferentes perfis e cidades

### ❓ FAQ
- 10 perguntas frequentes
- Interface expansível
- Respostas detalhadas

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/hairbooking-saas.git

# Entre no diretório
cd hairbooking-saas

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Cabeçalho com navegação
│   │   └── footer.tsx       # Rodapé com links
│   ├── sections/
│   │   ├── hero.tsx         # Seção principal
│   │   ├── about.tsx        # Sobre a plataforma
│   │   ├── services.tsx     # Serviços oferecidos
│   │   ├── plans.tsx        # Planos de assinatura
│   │   ├── testimonials.tsx # Depoimentos
│   │   ├── location.tsx     # Localizações
│   │   ├── faq.tsx          # Perguntas frequentes
│   │   └── booking.tsx      # Formulário de agendamento
│   └── ui/
│       ├── button.tsx       # Componentes de botão
│       ├── loading.tsx      # Estados de carregamento
│       └── scroll-to-top.tsx # Botão voltar ao topo
```

## 🎯 Roadmap

### Fase 1 - MVP ✅
- [x] Landing page completa
- [x] Design responsivo
- [x] Formulário de agendamento
- [x] Sistema de planos

### Fase 2 - Backend (Em Desenvolvimento)
- [ ] API de agendamentos
- [ ] Sistema de autenticação
- [ ] Integração com pagamentos
- [ ] Dashboard administrativo

### Fase 3 - IA e Advanced Features
- [ ] Análise facial com IA
- [ ] Recomendações personalizadas
- [ ] Chat de suporte
- [ ] App mobile

### Fase 4 - Expansão
- [ ] Sistema multi-tenant
- [ ] Integração com salões parceiros
- [ ] Analytics avançados
- [ ] API pública

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: contato@hairbooking.com
- **Website**: [hairbooking.com](https://hairbooking.com)
- **LinkedIn**: [HairBooking](https://linkedin.com/company/hairbooking)

---

Feito com ❤️ por [Matheus Reis](https://github.com/matheusviniciusdosreissouza)
