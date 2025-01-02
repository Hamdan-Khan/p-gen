import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import GetStarted from "@/components/home/GetStarted";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <GetStarted />
    </div>
  );
}
