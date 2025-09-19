"use client";
import Container from "@/components/common/Container";
import HeroInfo from "@/components/HeroInfo";
import HeroIntro from "@/components/HeroIntro";
import HeroMarque from "@/components/HeroMarque";
import HeroAbout from "@/components/common/HeroAbout";
import Service from "@/components/common/Service";
import { blogPosts, cardData, items, myPricingPlans, projects, testimonials } from "@/utils/constant/constant";
import { MarqueeStrip } from "@/components/common/MarqueeStripProps";
import { ProjectGrid } from "@/components/common/ProjectCard";
import Clients from "@/components/common/Clients";
import Customers from "@/components/Customers";
import PricingPlan from "@/components/common/PricingPlan";
import NewsBlog from "@/components/common/NewsBlog";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function Home() {
  return (
    <>
      <Container>
        <HeroIntro />
        <HeroInfo />
        <HeroAbout />
      </Container>

      <HeroMarque />

      <Container>
        <Service/>
      </Container>

      <div className="py-20 lg:py-30 mt-10 rounded-4xl bg-[#111212]">
        <Container>
          <SectionHeader number="04" title="LET ME SHOW YOU" actionText="((PROJECT ALL))" />
        </Container>
        <MarqueeStrip />
        <Container>
          <section className="text-white py-16 border-y border-[#2f3030] mt-15 ">
            <div className="max-w-6xl mx-auto  px-0 lg:px-6 space-y-12">
              <ProjectGrid projects={projects.slice(0, 2)} withDivider />
              <ProjectGrid projects={projects.slice(2, 4)} withDivider />
              <ProjectGrid projects={projects.slice(4, 6)} />
            </div>
          </section>
        </Container>
      </div>

      <Container>
        <Clients testimonials={testimonials} />
      </Container>

      <Customers />
      <PricingPlan plans={myPricingPlans} />

      <div className="py-30 mt-10 rounded-4xl">
        <Container>
          <SectionHeader number="08" title="News blog" actionText="((All POsts))" />
        </Container>
        <MarqueeStrip text="NEWS" />
        <Container>
          <NewsBlog posts={blogPosts}/>
        </Container>

      </div>

    </>
  );
}
