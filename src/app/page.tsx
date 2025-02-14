import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
    <main className="min-h-screen px-6 py-4">
      <Header />
      <Hero />
      <Gallery />
    </main>
  )
}


