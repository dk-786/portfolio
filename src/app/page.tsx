import Container from "@/components/common/Container";
import HeroAbout from "@/components/HeroAbout";
import HeroInfo from "@/components/HeroInfo";
import HeroIntro from "@/components/HeroIntro";
import HeroMarque from "@/components/HeroMarque";
import Service from "@/components/Service";
import Projects from "@/components/Projects";

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
        <Service />
      </Container>

      <Projects />
      

    </>
  );
}
