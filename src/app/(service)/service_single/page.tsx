import PageTitle from "@/components/common/PageTitle";
import React from "react";
import ProductShowcase from "../components/ProductShowcase ";
import WorkProcess from "../components/WorkProcess";
import FaqAccordion from "@/components/common/FaqAccordion";
import { faqData } from "@/utils/constant/constant";

const page = () => {
  return (
    <>
      <PageTitle
        title="Branding Design"
        crumbs={[{ label: "Home" }, { label: "Branding Design", active: true }]}
      />
      <ProductShowcase />
      <WorkProcess />
      <FaqAccordion
        items={faqData}
        defaultOpenIndex={0}
        title="Find Your questions?"
      />
    </>
  );
};

export default page;
