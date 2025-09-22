"use client"
import HeroSection from "../components/HeroSection";
import HeroAbout from "@/components/common/HeroAbout";
import HeroMarque from "@/components/HeroMarque";
import Counter from "../components/Counter";
import { SectionHeader } from "@/components/common/SectionHeader";
import ExperienceList from "../components/ExperienceList";
import { MarqueeStrip } from "@/components/common/MarqueeStripProps";
import AwardsSection from "../components/AwardsSection";
import Clients from "@/components/common/Clients";
import Customers from "@/components/Customers";

export default function Home() {
  return (
    <main>
      <HeroSection videoUrl="https://www.youtube.com/watch?v=7e90gBu4pas" />

      <div className="mt-20">
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
      <Counter />

      <div className="mt-24">
        <SectionHeader
          title="My experience"
          description="We believe in the transformative power of digital experiences. We craft websites and digital products that elevate your online presence but also drive real business value."
          actionText="((Project All))"
          noBorderBottom
        />
        <ExperienceList />
      </div>

      <div className="bg-[#111212] mt-20">
        <MarqueeStrip text="AWWWARDS" />
        <AwardsSection/>
      </div>

      <div className="mt-30">
        <SectionHeader
          title="Satisfied clients"
          description="Our happy customers give us impactfull and positive feedback on our services, customer supports & etc."
          showNavigation={true}
          prevButtonId="prevBtn"
          nextButtonId="nextBtn"
          noBorderBottom
        />
        <Clients  />
      </div>

      <div className="bg-[#f3f1eb] rounded-4xl  mt-30 py-30   p-0 lg:p-25">
        <SectionHeader
          title="Customers"
          description="My journey began with a fascination for the digital world to make it more beautiful and accessible. With a degree in Interaction Design and over a decade of experience,"
          actionText="((CONTACT ME))"
          noBorderBottom
          textColor="text-[#171818]"
        />
        <Customers />
      </div>
    </main>
  );
}
