// components/BlogHeader.tsx
import Container from "@/components/common/Container";
import Image from "next/image";

export default function BlogHeader() {
  return (
    <Container>
      <div className="text-white py-16 px-6 flex flex-col items-center text-center">
        <span className="bg-[#ffbd4a] text-black text-sm font-semibold px-5 py-2 rounded-md mb-6">
          BRANDING
        </span>

        <p className="text-gray-300 text-lg mb-6">
          26 January, 2024 / Comments (0)
        </p>

        <h1 className="text-5xl lg:text-6xl font-bold mb-10 max-w-4xl leading-tight">
          Digital and physical brand design
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/user/29.jpg" 
              alt="Author"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-[#959595] text-sm">Written by</p>
              <p className="font-semibold text-lg text-white">Willomson</p>
            </div>
          </div>

          <div className="text-left">
            <p className="text-[#959595] text-sm">Viewed</p>
            <p className="font-semibold text-lg text-white">3 min read</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
