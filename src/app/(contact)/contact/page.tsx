import React from "react";
import FormCard from "../components/FormCard";
import MapWrapper from "../components/MapWrapper";
import { faqData } from "@/utils/constant/constant";
import FaqAccordion from "@/components/common/FaqAccordion";
import PageTitle from "@/components/common/PageTitle";

const page = () => {
  return (
    <>
     <PageTitle
      title="Find main the best suites"
      crumbs={[
        { label: "Home" },
        { label: "Contact me", active: true },
      ]}
    />
      <FormCard />
      <div className="mt-30">
        <MapWrapper />
      </div>
        <FaqAccordion
          items={faqData}
          defaultOpenIndex={0}
          title="Have any questions?"
        />
    </>
  );
};

export default page;
