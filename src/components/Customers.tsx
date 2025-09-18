"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { customers } from "@/utils/constant/constant";
import Container from "@/components/common/Container";

interface ServiceProps {
    sectionNumber?: string;
    sectionTitle?: string;
    description?: string;
    actionText?: string;
}

const Customers: React.FC<ServiceProps> = ({
    sectionNumber = "06",
    sectionTitle = "Customers",
    description = "My journey began with a fascination for the digital world to make it more beautiful and accessible. With a degree in Interaction Design and over a decade of experience,",
    actionText = "((CONTACT ME))",
}) => {
    return (
        <section className="bg-[#f3f1eb] rounded-4xl text-black mt-30 py-25  p-0 lg:p-25">
            <Container>
                <div className="w-full flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center px-2  border-t border-[#dcdad4] py-20">
                    <div className="w-full mb-4 text-base lg:w-1/6 lg:mb-0 lg:text-lg">
                        {sectionNumber} {"//"} {sectionTitle}
                    </div>
                    <div className="w-full space-y-4 mb-4 lg:space-y-6 lg:w-2/3 lg:mb-0">
                        <p className="text-base font-medium indent-0 lg:text-xl lg:indent-40">
                            {description}
                        </p>
                    </div>
                    <div className="w-full flex justify-start lg:w-1/6 lg:justify-end">{actionText}</div>
                </div>

                <div className="border-y border-[#dcdad4] ">
                    <Marquee speed={40} gradient={false}>
                        {customers.map((item, i) => (
                            <div
                                key={i}
                                className=" flex-shrink-0 flex items-center justify-center rounded-2xl border border-gray-300 bg-[#f3f1eb] shadow-sm mx-8 w-48 h-30"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={90}
                                    height={40}
                                    className="object-contain lg:w-[120px] lg:h-[60px]"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </Container>
        </section>
    );
};

export default Customers;
