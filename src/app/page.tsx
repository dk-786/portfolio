import Container from "@/components/common/Container";
import HeroInfo from "@/components/HeroInfo";
import HeroIntro from "@/components/HeroIntro";
import React from "react";

export default function Home() {
  return (
  <>
    <Container>
    <HeroIntro />
    </Container>
    <Container>
    <HeroInfo />
    </Container>
  </>
  );
}
