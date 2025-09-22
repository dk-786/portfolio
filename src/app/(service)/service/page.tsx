import React from "react";
import Title from "../components/Title";
import { SectionHeader } from "@/components/common/SectionHeader";
import Service from "@/components/common/Service";
import Clients from "@/components/common/Clients";
import Customers from "@/components/Customers";
import { cardDataOne } from "@/utils/constant/constant";
import Card from "../components/Card";
import Container from "@/components/common/Container";

const page = () => {
  return (
    <>
      <Title />

      <div className="mt-70">
        <SectionHeader
          title="My services"
          actionText="((Service All))"
          description="Our work builds more loyal audiences by combining an unwavering focus on their needs and desires, and our relentless pursuit of design excellence."
        />
        <Service />
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
        <Clients />
      </div>
      <div className="bg-[#f3f1eb] rounded-4xl  mt-30 py-30  p-0 lg:p-25">
        <SectionHeader
          title="Customers"
          description="My journey began with a fascination for the digital world to make it more beautiful and accessible. With a degree in Interaction Design and over a decade of experience,"
          actionText="((CONTACT ME))"
          noBorderBottom
          textColor="text-[#171818]"
        />
        <Customers />
      </div>

      <div className="mt-30">
        <SectionHeader
          title="Working process"
          description="Over a decade of experience in interactive design and working with some of the most talented people in the business"
          noBorderBottom
        />
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardDataOne.map((card) => (
            <Card
              key={card.number}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </Container>
      </div>
    </>
  );
};

export default page;
