import { useState, useEffect } from 'react';
import ProdutoCard from './components/ProdutoCard';
import './App.css';

const produtosIniciais = [
  {
    id: 1,
    nome: 'Ração Premium',
    preco: '89.90',
    imagem: '/img/pet-racao.jpg',
    descricao: 'Ração completa para cães adultos.'
  },
  {
    id: 2,
    nome: 'Brinquedo Mordedor',
    preco: '34.90',
    imagem: '/img/pet-brinquedo.jpg',
    descricao: 'Resistente e seguro para brincar.'
  },
  {
    id: 3,
    nome: 'Cama Conforto',
    preco: '129.90',
    imagem: '/img/pet-cama.jpg',
    descricao: 'Cama macia para o seu pet descansar.'
  }
];

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setProdutos(produtosIniciais);
      setCarregando(false);
    }, 1000);
  }, []);

  function adicionarProduto(evento) {
    evento.preventDefault();

    const novoProduto = {
      id: Date.now(),
      nome: nome,
      preco: Number(preco).toFixed(2),
      imagem: '/img/pet-feliz.jpg',
      descricao: descricao
    };

    setProdutos([...produtos, novoProduto]);

    setNome('');
    setPreco('');
    setDescricao('');
  }

  return (
    <main className="container">
      <h1 className="titulo">Catálogo de Produtos</h1>

      <form className="formulario" onSubmit={adicionarProduto}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label htmlFor="preco">Preço</label>
        <input
          id="preco"
          type="number"
          step="0.01"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />

        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <button className="botao" type="submit">Cadastrar produto</button>
      </form>

      {carregando ? (
        <p className="carregando">carregando...</p>
      ) : (
        <section className="lista-produtos">
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
              descricao={produto.descricao}
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default App;