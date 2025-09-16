import Image from 'next/image';
import React from 'react';

interface ServiceItem {
  num: string;
  title: string;
  img: string;
}

interface ServiceProps {
  sectionNumber?: string;
  sectionTitle?: string;
  description?: string;
  actionText?: string;
  items?: ServiceItem[];
}

const Service: React.FC<ServiceProps> = ({
  sectionNumber = "03",
  sectionTitle = "MY SERVICES",
  description = "Our work builds more loyal audiences by combining an unwavering focus on their needs and desires, and our relentless pursuit of design excellence.",
  actionText = "((SERVICE ALL))",
  items = []
}) => {
  return (
    <>
      <section className=" text-white w-full flex justify-between px-6 py-20 border-t-1 border-b-1 border-[#2f3030] ">
        <div className="w-1/6 text-white text-lg ">
          {sectionNumber} / {sectionTitle}
        </div>
        <div className="space-y-6 w-2/3">
          <p className="text-xl md:text-1xl lg:text-2xl font-bold indent-40">
            {description}
          </p>
        </div>

        <div className="w-1/6 flex justify-end">
          {actionText}
        </div>
      </section>

      {items.length > 0 && (
        <section className="w-full text-white py-16">
          <div className="max-w-5xl mx-auto px-6 relative">
            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  className="relative flex items-center justify-between border-b border-white group cursor-pointer py-12 pb-0"
                >
                  <div className="flex items-center flex-1">
                    <span className="w-12 text-lg font-medium tracking-widest text-gray-400">
                      {item.num}
                    </span>

                    <h2 className="flex-1 text-3xl md:text-5xl font-bold group-hover:text-gray-200 transition ml-4">
                      {item.title}
                    </h2>
                  </div>

                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={320}
                      height={320}
                      className="w-80 h-80 object-cover rounded-xl shadow-lg"
                    />

                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Service;
