import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchProdutosApi() {
  const resp = await fetch(
    "https://api.npoint.io/a75ddef865c8ba5b89b7/produtos"
  );
  if (!resp.ok) throw new Error("Não foi possível obter os dados");

  const produtos = await resp.json();
  return produtos;
}

async function fetchCategoriasApi() {
  const resp = await fetch(
    "https://api.npoint.io/4b0facc64c77155ed4c6/categorias"
  );
  if (!resp.ok) throw new Error("Failed to fetch data");

  const categorias = await resp.json();
  return categorias;
}

export default async function Home() {
  const produtos = await fetchProdutosApi();
  const categorias = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
