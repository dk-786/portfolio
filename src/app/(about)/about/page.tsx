// app/page.tsx
import Container from "@/components/common/Container";
import HeroSection from "../components/HeroSection";
import HeroAbout from "@/components/common/HeroAbout";
import HeroMarque from "@/components/HeroMarque";
import {cardData} from "@/utils/constant/constant";
import Counter from "../components/Counter";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function Home() {
  return (
    <main>
      <HeroSection
        videoUrl="https://www.youtube.com/watch?v=7e90gBu4pas"
      />
      <Container>
      <HeroAbout/>
      </Container>
      <HeroMarque />
      <Counter/>
      <Container>
          <SectionHeader  title="My experience" actionText="((Project All))" />
        </Container>
    </main>
  );
}
