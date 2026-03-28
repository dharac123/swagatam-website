import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { PortfolioHero } from "@/components/portfolio/hero";
import ProjectShowcase from "@/components/portfolio/projects";
import WorkflowSection from "@/components/portfolio/workflow";

export default function Services() {
  return (
    <>
    <Header />
    <PortfolioHero />
    <ProjectShowcase />
    {/* <WorkflowSection /> */}
    <Footer />
    </>
  );
}
