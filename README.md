# DevMotos Service Platform

📅 Junho de 2025 – até o momento

Aplicação completa de plataforma de serviços para oficinas e manutenção veicular, com páginas dinâmicas, SEO otimizado e interface responsiva.

---

## 🧪 Tecnologias Utilizadas

### 🖥️ Frontend

* **Next.js** (App Router)
* **React** + **TypeScript**
* **SCSS Modules**
* **next/image** (otimização de imagens)
* **react-icons** (ícones WhatsApp)

### 🛠️ Backend / Fetch

* Função customizada `getItemBySlug` para consumo de API/CMS
* Suporte a Server Components do Next.js

---

## 🚀 Funcionalidades

* **Rotas dinâmicas** por slug para cada serviço
* **SEO dinâmico** usando `generateMetadata` (Open Graph incluído)
* **Carregamento otimizado** de imagens com `<Image>` do Next.js
* **Fallback de loading** durante navegação interna (App Router)
* **Componente Hero** com botão de contato WhatsApp
* **Seção Sobre** com texto customizável e botão opcional

---

## 📦 Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/renelps/devmotos.git
   cd devmotos
   ```
2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```
3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```
4. Abra no navegador:

   > [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura de Pastas

```bash
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
```

---

## 🤝 Contribuição

1. Faça fork do repositório
2. Crie uma branch:

   ```bash
   git checkout -b minha-feature
   ```
3. Realize suas alterações e faça commit:

   ```bash
   git commit -m "feat: descrição da feature"
   ```
4. Envie para o seu fork:

   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request

---

## 📝 Licença

MIT © ReneLPS


📝 Licença

MIT © ReneLPS

