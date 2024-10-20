import styles from "./page.module.css";
import Produto from "@/app/components/Produto";

async function fetchProdutoApi(slug) {
  const resp = await fetch(
    "https://api.npoint.io/a75ddef865c8ba5b89b7/produtos/"
  );
  const produtos = await resp.json();
  const produto = produtos.find((produto) => produto.id.toString() === slug);
  return produto;
}

export default async function ProdutoPage({ params }) {
  const produto = await fetchProdutoApi(params.slug);

  return (
    <main className={styles.main}>
      <Produto produto={produto} />
    </main>
  );
}

export async function generateStaticParams() {
  const resp = await fetch(
    "https://api.npoint.io/a75ddef865c8ba5b89b7/produtos/"
  );
  const produtos = await resp.json();
  return produtos.map((produto) => ({ slug: produto.id.toString() }));
}
