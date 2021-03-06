const products = [
  {
    id: "1",
    name: "Test Product",
    href: `/product/1`,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    price: "$19.99",
    description: "this is a product.",
  },
  {
    id: "2",
    name: "Test Product",
    href: "/product/2",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    price: "$19.99",
    description: "this is a product.",
  },
  {
    id: "3",
    name: "Test Product",
    href: "/product/3",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    price: "$19.99",
    description: "this is a product.",
  },
  {
    id: "4",
    name: "Test Product",
    href: "/product/4",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    price: "$19.99",
    description: "this is a product.",
  },
  {
    id: "5",
    name: "Test Product",
    href: "/product/5",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    price: "$19.99",
    description: "this is a product.",
  },
  {
    id: "6",
    name: "Test Product",
    href: "/product/6",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    price: "$19.99",
    description: "this is a product.",
  },
];

export default function ProductsSection() {
  return (
    <div className="max-w-2xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 id="products-heading" className="text-3xl pb-10">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            <p className="mt-1 text-sm italic text-gray-500">
              {product.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
