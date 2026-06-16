import AboutHero from "@/components/about/hero";
import Methodology from "@/components/about/pipeline";
import OurStory from "@/components/about/story";
import TeamSection from "@/components/about/team";
import Testimonials from "@/components/about/testimonials";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function Services() {
  return (
    <>
    <Header />
    <AboutHero />
    <OurStory />
    <TeamSection />
    <Methodology />
    <Testimonials />
    <Footer />
    </>
  );
}
