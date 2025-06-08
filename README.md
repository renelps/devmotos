DevMotos Service Platform

📅 Junho de 2025 – até o momento

Aplicação completa de plataforma de serviços para oficinas e manutenção veicular, com páginas dinâmicas, SEO otimizado e interface responsiva.

🧪 Tecnologias Utilizadas

🖥️ Frontend

Next.js (App Router)

React + TypeScript

SCSS Modules

next/image (otimização de imagens)

react-icons (ícones WhatsApp)

🛠️ Backend / Fetch

Função customizada getItemBySlug para consumo de API/CMS

Suporte a Server Components do Next.js

🚀 Funcionalidades

Rotas dinâmicas por slug para cada serviço

SEO dinâmico usando generateMetadata (Open Graph incluído)

Carregamento otimiz ado de imagens com <Image> do Next.js

Fallback de loading durante navegação interna (App Router)

Componente Hero com botão de contato WhatsApp

Seção Sobre com texto customizável e botão opcional

📦 Como Executar o Projeto

Clone o repositório:

git clone https://github.com/renelps/devmotos.git
cd devmotos

Instale dependências:

npm install
# ou
yarn install

Inicie em modo de desenvolvimento:

npm run dev
# ou
yarn dev

Acesse: http://localhost:3000

📁 Estrutura de Pastas

src/
├── app/
│   ├── post/
│   │   ├── layout.tsx       # Layout do segmento /post
│   │   ├── page.tsx         # Lista ou redirecionamento
│   │   └── [slug]/
│   │       ├── page.tsx     # Detalhe do serviço
│   │       ├── loading.tsx  # Componente de loading
│   │       └── components/
│   │           └── content.tsx
├── components/              # Componentes reutilizáveis
│   ├── Hero.tsx
│   └── Container.tsx
└── utils/
    ├── actions/
    │   └── get-data.ts      # Lógica de fetch
    └── post.type.ts         # Tipagens

public/   # Imagens e assets estáticos
styles/   # Estilos globais
.next/    # Build e cache (ignoradas no Git)

🤝 Contribuição

Fork do repositório

Crie uma branch: git checkout -b minha-feature

Faça commits concisos: git commit -m "feat: descrição da feature"

Envie: git push origin minha-feature

Abra um Pull Request
