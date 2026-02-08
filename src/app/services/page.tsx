import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ServiceCTA from "@/components/services/cta";
import ServiceHero from "@/components/services/hero";
import ServiceList from "@/components/services/list";

export default function Services() {
  return (
    <>
    <Header />
    <ServiceHero />
    <ServiceList />
    <ServiceCTA />
    <Footer />
    </>
  );
}
