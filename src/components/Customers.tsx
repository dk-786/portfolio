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
        <section className="bg-[#f3f1eb] h-150 rounded-4xl text-black mt-30 p-25 ">
            {/* Header */}
            <Container>
                <div className="w-full flex justify-between px-6 py-20 border-t border-[#dcdad4] ">
                    <div className="w-1/6 text-lg">
                    {sectionNumber} {"//"} {sectionTitle}   
                    </div>
                    <div className="space-y-6 w-2/3">
                        <p className="text-xl md:text-1xl lg:text-2xl font-medium indent-40">
                            {description}
                        </p>
                    </div>
                    <div className="w-1/6 flex justify-end">{actionText}</div>
                </div>

                {/* Logos Marquee */}
                <div className="border-y border-[#dcdad4] ">
                    <Marquee speed={40} gradient={false}>
                        {customers.map((item, i) => (
                            <div
                                key={i}
                                className="mx-8 flex-shrink-0 w-48 h-30 flex items-center justify-center rounded-2xl border border-gray-300 bg-[#f3f1eb] shadow-sm"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={120}
                                    height={60}
                                    className="object-contain"
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
