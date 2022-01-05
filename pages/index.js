import Head from "next/head";
import ProductsSection from "../components/ProductsSection";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sample Ecommerce Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white overflow-hidden w-screen">
        <ProductsSection />
      </div>
    </div>
  );
}
