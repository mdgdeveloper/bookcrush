import CurrentBook from "@/components/CurrentBook";
import Hero from "@/components/Hero";
import NavBar from "@/components/navbar/NavBar"

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <Hero />
      </div>
      <div className="mt-12">
        <CurrentBook />
      </div>
    </div>
  );
}
