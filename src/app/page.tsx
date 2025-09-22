"use client";
import Container from "@/components/common/Container";
import HeroInfo from "@/components/HeroInfo";
import HeroIntro from "@/components/HeroIntro";
import HeroMarque from "@/components/HeroMarque";
import HeroAbout from "@/components/common/HeroAbout";
import Service from "@/components/common/Service";
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
      <HeroIntro />
      <HeroInfo />

      <div>
        <SectionHeader
          number="02"
          title=" About me"
          scrollTarget={2000}
          description="Hello, my name’s Nikolas Raio, I’m a bay-area born designer based in Ghana. I’m currently at Envoy as a senior web designer creating connected brands, product commerce, and web experiences."
          noBorderBottom
        />
        <HeroAbout />
      </div>

      <HeroMarque />

      <div>
        <SectionHeader
          number="03"
          title="My services"
          actionText="((Service All))"
          description="Our work builds more loyal audiences by combining an unwavering focus on their needs and desires, and our relentless pursuit of design excellence."
        />
        <Service />
      </div>

      <div className="py-20 lg:py-30 rounded-4xl  bg-[#111212]">
        <SectionHeader
          number="04"
          title="LET ME SHOW YOU"
          actionText="((PROJECT ALL))"
          noBorderBottom
        />
        <MarqueeStrip />
        <Container>
          <section className="text-white py-16 border-y border-[#2f3030] mt-15 ">
            <div className="max-w-6xl mx-auto  px-0 lg:px-6 space-y-12">
              <ProjectGrid startIndex={0} endIndex={2} withDivider />
              <ProjectGrid startIndex={2} endIndex={4} withDivider />
              <ProjectGrid startIndex={4} endIndex={6} />
            </div>
          </section>
        </Container>
      </div>

      <div className="mt-30">
        <SectionHeader
          number="06"
          title="Satisfied clients"
          description="Our happy customers give us impactfull and positive feedback on our services, customer supports & etc."
          showNavigation={true}
          prevButtonId="prevBtn"
          nextButtonId="nextBtn"
          noBorderBottom
        />
        <Clients  />
      </div>

      <div className="bg-[#f3f1eb] rounded-4xl  mt-30 py-30  p-0 lg:p-25">
        <SectionHeader
          number="07"
          title="Customers"
          description="My journey began with a fascination for the digital world to make it more beautiful and accessible. With a degree in Interaction Design and over a decade of experience,"
          actionText="((CONTACT ME))"
          noBorderBottom
          textColor="text-[#171818]"
        />
        <Customers />
      </div>

      <div className="mt-30 text-[#fff] w-full ">
        <SectionHeader
          number="08"
          title="Pricing plan"
          description="Your pricing page is a prime opportunity to take control of the price conversation and make it even easier for people to buy."
          actionText="(( Service All ))"
          noBorderBottom
        />

        <PricingPlan />
      </div>

      <div className="pt-30 mt-10 rounded-4xl">
        <SectionHeader
          number="09"
          title="News blog"
          actionText="((All POsts))"
          noBorderBottom
        />
        <MarqueeStrip text="NEWS" />
        <NewsBlog />
      </div>
    </>
  );
}
