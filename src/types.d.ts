interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
