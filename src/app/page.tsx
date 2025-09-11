import Container from "@/components/common/Container";
import HeroAbout from "@/components/HeroAbout";
import HeroInfo from "@/components/HeroInfo";
import HeroIntro from "@/components/HeroIntro";
import HeroMarque from "@/components/HeroMarque";
import React from "react";

export default function Home() {
  return (
    <>
      <Container>
        <HeroIntro />
        <HeroInfo />
     
        <HeroAbout />
        </Container>
  
      <HeroMarque/>
    </>
  );
}
