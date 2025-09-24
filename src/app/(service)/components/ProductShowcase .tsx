"use client";
import Container from "@/components/common/Container";
import ArrowImageBlock from "@/components/common/ArrowImageBlock";

const ProductShowcase = () => {
  return (
    <Container>
      <section className="w-full  text-white py-16 px-6 lg:px-12 rounded-3xl">
        <div className=" mx-auto ">
        
          <ArrowImageBlock
            src="/user/24.jpg"
            alt="Product Mockup"
            width={1000}
            height={1000}
            sizes="(max-width: 1024px) 100vw, 800px"
          />

          {/* Description */}
          <p className="mt-10 text-[#959595] leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised slightly in believable. If you are going to
            use a passage of Lorem Ipsum, you need to be sure there isn&apos;t
            anything embarrassing hidden in the middle of text. All the Lorem
            Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It
            uses a dictionary of over, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable.
          </p>

          {/* Bullet List */}
          <ul className="mt-8 space-y-3 text-left text-[#959595]">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-[#ffbd4a] rounded-full"></span>
              <span>
                All the Lorem Ipsum generators on the Internet tend to repeat
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-[#ffbd4a] rounded-full"></span>
              <span>
                The generated Lorem Ipsum is therefore always free from
                repetition,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-[#ffbd4a] rounded-full"></span>
              <span>
                Many desktop publishing packages and web page editors now
              </span>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default ProductShowcase;
