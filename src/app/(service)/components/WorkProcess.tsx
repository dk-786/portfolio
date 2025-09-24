"use client";
import Image from "next/image";

const WorkProcess = () => {
  return (
    <section className=" text-white  px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className=" mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            The way we work
          </h2>
          <p className="text-[#959595]  text-1xl leading-relaxed  ">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </div>

        <div className="flex  gap-10  mb-16">
          {[
            {
              number: "01",
              title: "Research and analytics",
              desc: "Nor again is there anyone who loves or pursues or desires to obtain itself because it is pain,",
            },
            {
              number: "02",
              title: "Planning and Strategy",
              desc: "Nor again is there anyone who loves or pursues or desires to obtain itself because it is pain,",
            },
            {
              number: "03",
              title: "Design and Develop",
              desc: "Nor again is there anyone who loves or pursues or desires to obtain itself because it is pain,",
            },
            {
              number: "04",
              title: "Testing and Launch",
              desc: "Nor again is there anyone who loves or pursues or desires to obtain itself because it is pain,",
            },
          ].map((step, idx) => (
            <div key={idx} className="space-y-3 pr-4">
              <span className="text-[#ffbd4a] text-lg font-semibold">
                {step.number}
              </span>
              <h3 className="font-semibold text-xl ">{step.title}</h3>
              <p className="text-[#959595] text-md leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Image Showcase */}
        <div className="bg-[#1a1a1a] rounded-4xl overflow-hidden shadow-lg mb-12">
          <Image
            src="/user/25.jpg"
            alt="Mug Mockup"
            width={1000}
            height={600}
            className="w-full object-cover"
          />
        </div>

        {/* Bottom Text */}
        <p className="text-[#959595] leading-relaxed  ">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur,
        </p>
      </div>
    </section>
  );
};

export default WorkProcess;
