import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import TicketsSection from "./components/TicketsSection";
import FlightInfoSection from "./components/FlightInfoSection";
import QuotesSection from "./components/QuotesSection";
import ExperienceSection from "./components/ExperienceSection";
import InstagramSection from "./components/InstagramSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <CountdownSection />
        <TicketsSection />
        <FlightInfoSection />
        <QuotesSection />
        <ExperienceSection />
        <InstagramSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
}
