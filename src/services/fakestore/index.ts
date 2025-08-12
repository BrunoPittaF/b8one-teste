export async function fetchProducts(): Promise<IProduct[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Falha ao buscar produtos');
  return res.json();
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  if (!res.ok) throw new Error('Falha ao buscar categorias');
  return res.json();
}