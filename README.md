# Catálogo de Produtos - React

Aplicação front-end em React para exibir um catálogo de produtos, com cadastro de novos produtos. Projeto desenvolvido no Módulo 17 do curso de Front-End da EBAC.

## Tecnologias usadas

- React
- Vite
- JavaScript
- CSS
- GIMP (Edição de fotos)

## O que o projeto faz

- Exibe uma lista de produtos com nome, preço, imagem e descrição
- Simula o carregamento inicial com `useEffect` e `setTimeout`, exibindo a mensagem "carregando..."
- Permite cadastrar novos produtos por um formulário controlado
- Adiciona o novo produto na listagem sem recarregar a página
- Layout responsivo para celular, tablet e desktop

## Onde baixar

```bash
git clone https://github.com/LucasAGomez/catalogo-react.git
cd catalogo-react
npm install
npm run dev
```
## Estrutura de pastas

catalogo-react/
├── public/
│   └── img/
│       ├── pet-racao.jpg
│       ├── pet-brinquedo.jpg
│       └── pet-cama.jpg
├── src/
│   ├── components/
│   │   └── ProdutoCard.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md