import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      <Header />

      <Hero />

      <ProductsSection />

    </main>
  );
}