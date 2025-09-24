"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const ProjectDetails = () => {
  return (
    <section className=" text-white py-12 ">
      <div className="space-y-10">
        {/* Top Info Bar */}
        <div className=" rounded-lg  flex w-full justify-between  text-md">
          <div>
            <h4 className="text-gray-400 font-medium">Client:</h4>
            <p className="text-white">Nicolas Marko</p>
          </div>
          <div>
            <h4 className="text-gray-400 font-medium">Category:</h4>
            <p className="text-white">UI/UX Design</p>
          </div>
          <div>
            <h4 className="text-gray-400 font-medium">Date:</h4>
            <p className="text-white">26 January, 2024</p>
          </div>
          <div>
            <h4 className="text-gray-400 font-medium">Location:</h4>
            <p className="text-white">Brooklyn, New York</p>
          </div>
          <div>
            <h4 className="text-gray-400 font-medium">Follow:</h4>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="hover:text-orange-400">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-orange-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-orange-400">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-orange-400">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Title & Main Content */}
        <div className="space-y-6">
          <h2 className="text-2xl lg:text-4xl font-bold leading-snug">
            How To Improve And Measure Your Progress Learning Mobile Application
            Design
          </h2>
          <p className="text-[#959595] leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised slightly in believable. If you are going to
            use a passage of Lorem Ipsum, you need to be sure there isn’t
            anything embarrassing hidden in the middle of text. All the Lorem
            Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It
            uses a dictionary of over, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable.
          </p>

          {/* Bullet Points */}
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

          <p className="text-[#959595] leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam.
          </p>
        </div>

        {/* Sub Heading */}
        <div>
          <h3 className="text-xl lg:text-3xl font-semibold mb-4">
            Find out the design solution.
          </h3>
          <p className="text-[#959595] leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised slightly in believable. If you are going to
            use a passage of Lorem Ipsum, you need to be sure there isn’t
            anything embarrassing hidden in the middle of text. All the Lorem
            Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet.
          </p>
        </div>

        {/* Images Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-[#1a1a1a] rounded-4xl overflow-hidden">
            <Image
              src="/user/26.jpg"
              alt="Design Image 1"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
            <Image
              src="/user/27.jpg"
              alt="Design Image 2"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
            <Image
              src="/user/28.jpg"
              alt="Design Image 3"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="bg-black rounded-2xl flex items-center justify-between px-8 py-6">
          {/* Previous Button */}
          <button className="flex items-center space-x-2 text-white font-semibold hover:text-[#ffbd4a] transition">
            <HiOutlineChevronLeft className="text-sm" />
            <span>Previous</span>
          </button>

          {/* Next Button */}
          <button className="flex items-center space-x-2 text-white font-semibold hover:text-[#ffbd4a] transition">
            <span>Next</span>
            <HiOutlineChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
