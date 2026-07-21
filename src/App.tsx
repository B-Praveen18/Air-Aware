import { Header } from "@/components/Header";
import { Ticker } from "@/components/Ticker";
import { Hero } from "@/components/Hero";
import { Report } from "@/components/Report";
import { Pollutants } from "@/components/Pollutants";
import { AQIScale } from "@/components/AQIScale";
import { Impact } from "@/components/Impact";
import { Action } from "@/components/Action";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

export default function App() {
  return (
    <div className="grain relative min-h-screen">
      <Ticker />
      <Header />
      <main>
        <Hero />
        <Report />
        <Pollutants />
        <AQIScale />
        <Impact />
        <Action />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
