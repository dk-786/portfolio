"use client";
import Container from "@/components/common/Container";
import HeroInfo from "@/components/HeroInfo";
import HeroIntro from "@/components/HeroIntro";
import HeroMarque from "@/components/HeroMarque";
import HeroAbout from "@/components/common/HeroAbout";
import Service from "@/components/common/Service";
import { cardData, items, projects, testimonials } from "@/utils/constant/constant";
import { SectionHeader, MarqueeStrip, ProjectGrid } from "@/components/common/Projects";
import Clients from "@/components/common/Clients";
import Customers from "@/components/Customers";

export default function Home() {
  return (
    <>
      <Container>
        <HeroIntro />
        <HeroInfo />
        <HeroAbout
          sectionNumber="02"
          sectionTitle="ABOUT ME"
          name="Darshak Vaddroiya"
          description="I'm a bay-area born designer based in Ahmedabad. I'm currently at"
          company="Envoy"
          scrollTarget={2200}
          cardData={cardData}
        />
      </Container>

      <HeroMarque />

      <Container>
        <Service
          sectionNumber="03"
          sectionTitle="MY SERVICES"
          description="Our work builds more loyal audiences by combining an unwavering focus on their needs and desires, and our relentless pursuit of design excellence."
          actionText="((SERVICE ALL))"
          items={items}
        />
      </Container>

      <div className="py-30 mt-10 rounded-4xl bg-[#111212]">
        <Container>
          <SectionHeader number="04" title="LET ME SHOW YOU" actionText="((PROJECT ALL))" />
        </Container>
        <MarqueeStrip />
        <Container>
          <section className="text-white py-16 border-y border-[#2f3030] mt-15 ">
            <div className="max-w-6xl mx-auto px-6 space-y-12">
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
    </>
  );
}
