# 🛍️ Vitrine de Ofertas - Teste Técnico

Aplicação desenvolvida em **React + TypeScript** que consome dados da [Fake Store API](https://fakestoreapi.com/products) para simular uma vitrine de produtos com **filtros**, **paginação** e **responsividade**.

---

## 🚀 Tecnologias Utilizadas

- **React** (React com vite)
- **TypeScript** (tipagem estática)
- **Tailwind CSS** (estilização responsiva)
- **@tanstack/react-query** (fetch e cache de dados da API)
- **Fake Store API** (dados fictícios de produtos)
- **Lazy Loading de Imagens** para melhor performance

---

## 📌 Funcionalidades

### Página `/ofertas`
- **Banner no topo**
- **Título da vitrine**: "Ofertas da Semana"
- **Cards de produto** contendo:
  - Imagem
  - Nome
  - Preço
  - Botão "Comprar"
- **Paginação**:
  - 6 produtos por página
  - Navegação entre páginas
  - Componente de paginação reutilizável (`Pagination.tsx`)

### Filtros
- **Por categoria** (select dinâmico, categorias carregadas da API)
- **Por faixa de preço** (inputs numéricos)
- Botão **"Limpar filtros"** para resetar a busca

### Responsividade
- Layout adaptável para **mobile**, **tablet** e **desktop**
- Cards e filtros organizados de forma fluida

## 📥 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/vitrine-ofertas.git
cd vitrine-ofertas
```

## 📦 2. Instalar Dependências

```bash
npm install
```

## ▶️ 3. Rodar o Projeto em Desenvolvimento

```bash
npm run dev
```