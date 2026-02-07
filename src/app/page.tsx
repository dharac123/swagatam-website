import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Clients from "@/components/home/clients";
import CTA from "@/components/home/cta";
import Hero from "@/components/home/hero";
import Portfolio from "@/components/home/portfolio";
import Process from "@/components/home/process";
import Services from "@/components/home/services";
import WhyUs from "@/components/home/whyUs";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Services />
    <WhyUs />
    <Process />
    <Clients />
    <Portfolio />
    <CTA />
    <Footer />
    </>
  );
}
