"use client"
import Poster from "@/components/Poster";
import Products from "@/components/common/Products";
import Card from "@/components/common/Card";
import Slider from "@/components/Slider";
import Subscribe from "@/components/Subscribe";
import Featuresection from "@/components/Featuresection";
import Blogmain from "@/components/Blogmain";
import Brandlogo from "@/components/Brandlogo";
import Follow from "@/components/Follow";



export default function Home() {
  return (
    <div>
      <Slider />
      <Card />
      <Poster />
      <Products />
      <Subscribe />
      <Featuresection />
      <Blogmain />
      <Brandlogo />
      <Follow />
    </div>
  );
}
