/** Tipos do cardápio (restaurantes, bares, cafeterias). */

export interface MenuItem {
  name: string;
  description?: string;
  /** Preço já formatado (ex.: '29,90'). Vazio/ausente = não exibe. */
  price?: string;
  /** Selo curto (ex.: 'Domingo', 'Mais pedido'). */
  tag?: string;
}

export interface MenuGroup {
  title?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  /** Âncora da categoria (ex.: 'drinks' → /cardapio#drinks). */
  id: string;
  title: string;
  subtitle?: string;
  /** Cor de destaque da categoria (qualquer cor CSS). Padrão: cor primária do tema. */
  color?: string;
  /** Cor do texto sobre `color` (rótulos dos grupos). Padrão: branco, ou o contraste do tema. */
  colorText?: string;
  groups: MenuGroup[];
}
