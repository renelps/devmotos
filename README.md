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

Carregamento otimizado de imagens com <Image> do Next.js

Fallback de loading durante navegação interna (App Router)

Componente Hero com botão de contato WhatsApp

Seção Sobre com texto customizável e botão opcional

📦 Como Executar o Projeto

Clone o repositório:

git clone https://github.com/renelps/devmotos.git
cd devmotos

Instale as dependências:

npm install
# ou
yarn install

Inicie o servidor de desenvolvimento:

npm run dev
# ou
yarn dev

Abra no navegador:

http://localhost:3000

📁 Estrutura de Pastas

src/
├── app/
│   ├── post/
│   │   ├── layout.tsx       # Layout do segmento /post
│   │   ├── page.tsx         # Lista de serviços ou redirecionamento
│   │   └── [slug]/
│   │       ├── page.tsx     # Detalhe de cada serviço
│   │       ├── loading.tsx  # Componente de loading
│   │       └── components/
│   │           └── content.tsx
├── components/              # Componentes compartilhados
│   ├── Hero.tsx
│   └── Container.tsx
└── utils/
    ├── actions/
    │   └── get-data.ts      # Lógica de fetch de dados
    └── post.type.ts         # Tipagens de dados

public/   # Assets estáticos (imagens, favicon)
styles/   # Estilos globais
.next/    # Build e cache (ignorada no Git)

🤝 Contribuição

Faça fork do repositório

Crie uma branch:

git checkout -b minha-feature

Realize suas alterações e faça commit:

git commit -m "feat: descrição da feature"

Envie para o seu fork:

git push origin minha-feature

Abra um Pull Request

📝 Licença

MIT © ReneLPS

