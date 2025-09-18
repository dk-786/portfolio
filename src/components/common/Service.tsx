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
      <section className="w-full text-white px-4  lg:px-6 py-10  lg:py-20 border-t border-b border-[#2f3030]">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0 w-full">
          <div className="w-full lg:w-1/6 text-base sm:text-lg mb-2 lg:mb-0 flex-shrink-0">
            {sectionNumber} / {sectionTitle}
          </div>
          <div className="w-full lg:w-2/3 space-y-4 lg:space-y-6">
            <p className="text-base sm:text-lg lg:text-2xl font-bold lg:indent-40">
              {description}
            </p>
          </div>
          <div className="w-full lg:w-1/6 flex justify-start lg:justify-end mt-2 lg:mt-0">
            {actionText}
          </div>
        </div>
      </section>

      {items.length > 0 && (
        <section className="w-full text-white py-2 lg:py-16">
          <div className="max-w-5xl mx-auto  relative">
            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  className="relative flex items-center justify-between border-b border-white group cursor-pointer py-12 pb-0"
                >
                
                  <div className="flex items-center flex-1 w-full">
                    <span className="w-12 min-w-[3rem] text-lg font-medium tracking-widest text-gray-400 flex-shrink-0">
                      {item.num}
                    </span>
                    <h2
                      className="
                        flex-1 
                        text-2xl 
                        sm:text-3xl 
                        lg:text-5xl 
                        font-bold 
                        group-hover:text-gray-200 
                        transition 
                        ml-2 
                        lg:ml-4 
                        whitespace-nowrap 
                        overflow-hidden 
                        text-ellipsis
                        w-full
                      "
                    >
                      {item.title}
                    </h2>
                  </div>

                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none">
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