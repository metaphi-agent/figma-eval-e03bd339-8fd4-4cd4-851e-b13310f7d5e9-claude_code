export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  tags: string[];
  badge?: 'new' | 'sale';
  discount?: number;
  sku: string;
  colors?: string[];
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    image: "./assets/images/product-1.png",
    category: "Chairs",
    tags: ["Chair", "Cafe", "Modern"],
    badge: "sale",
    discount: 30,
    sku: "SS001",
    colors: ["#816DFA", "#000000", "#B88E2F"],
    sizes: ["L", "XL", "XS"]
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image: "./assets/images/product-2.png",
    category: "Chairs",
    tags: ["Chair", "Cafe", "Modern"],
    sku: "SS002",
    colors: ["#816DFA", "#000000", "#B88E2F"],
    sizes: ["L", "XL", "XS"]
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    image: "./assets/images/product-3.png",
    category: "Sofas",
    tags: ["Sofa", "Chair", "Home", "Shop"],
    badge: "sale",
    discount: 50,
    sku: "SS003",
    colors: ["#816DFA", "#000000", "#B88E2F"],
    sizes: ["L", "XL", "XS"]
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    image: "./assets/images/product-4.png",
    category: "Outdoor",
    tags: ["Outdoor", "Bar", "Table"],
    badge: "new",
    sku: "SS004",
    colors: ["#816DFA", "#000000", "#B88E2F"],
    sizes: ["L", "XL", "XS"]
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    image: "./assets/images/product-5.png",
    category: "Lighting",
    tags: ["Lamp", "Night", "Modern"],
    sku: "SS005",
    colors: ["#816DFA", "#000000", "#B88E2F"],
    sizes: ["L", "XL", "XS"]
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    image: "./assets/images/product-6.png",
    category: "Accessories",
    tags: ["Mug", "Kitchen"],
    badge: "new",
    sku: "SS006",
    colors: ["#816DFA", "#000000", "#B88E2F"],
    sizes: ["L", "XL", "XS"]
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    originalPrice: 14000000,
    image: "./assets/images/product-7.png",
    category: "Bedroom",
    tags: ["Bed", "Bedroom", "Furniture"],
    badge: "sale",
    discount: 50,
    sku: "SS007",
    colors: ["#816DFA", "#000000", "#B88E2F"],
    sizes: ["L", "XL", "XS"]
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    image: "./assets/images/product-8.png",
    category: "Decor",
    tags: ["Pot", "Plant", "Decor"],
    badge: "new",
    sku: "SS008",
    colors: ["#816DFA", "#000000", "#B88E2F"],
    sizes: ["L", "XL", "XS"]
  }
];

export const formatPrice = (price: number): string => {
  return `Rp ${price.toLocaleString('id-ID')}`;
};
