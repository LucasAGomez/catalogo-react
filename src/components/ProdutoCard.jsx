function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <article className="card-produto">
      <img src={imagem} alt={nome} className="card-imagem" />
      <h3 className="card-nome">{nome}</h3>
      <p className="card-descricao">{descricao}</p>
      <p className="card-preco">R$ {preco}</p>
    </article>
  );
}

export default ProdutoCard;