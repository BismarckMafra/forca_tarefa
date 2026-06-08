import HeroCTA from "@/components/HeroCTA";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col font-sans">
      <HeroCTA />
      <ServicesSection />
    </main>
  );
}
