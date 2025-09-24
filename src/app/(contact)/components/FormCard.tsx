"use client";
import Container from "@/components/common/Container";
import React, { useState } from "react";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";

const FormCard = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    code: "",
  });

  const [touched, setTouched] = useState<{ [K in keyof typeof formValues]?: boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  const isEmpty = (value: string) => value.trim().length === 0;

  const showError = (key: keyof typeof formValues) => {
    const value = formValues[key];
    const hasBeenTouched = !!touched[key] || submitted;
    return hasBeenTouched && isEmpty(value);
  };

  const onChange = (key: keyof typeof formValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues(prev => ({ ...prev, [key]: e.target.value }));
  };

  const onBlur = (key: keyof typeof formValues) => () => {
    setTouched(prev => ({ ...prev, [key]: true }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const hasEmpty = Object.values(formValues).some(v => isEmpty(v));
    if (hasEmpty) {
      return;
    }
    // Submit logic here
  };
  return (
    <Container>
      <div className="relative mt-10 rounded-2xl bg-[#111212] border border-[#2f3030] text-white shadow-lg py-12 px-4 lg:py-18 lg:px-14">
        {/* Top Icon */}
        <div className="absolute -top-15 left-1/2 -translate-x-1/2">
          <div className="relative w-20 h-20 lg:w-30 lg:h-30 rounded-full bg-[#171818] flex items-center justify-center">
            <BsArrowDown className="text-white text-3xl lg:text-4xl hover:text-[#ffbd4a] transition duration-350 cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-16 lg:mt-6">
          {/* Left Contact Info */}
          <div className="bg-[#171818] w-full lg:w-[45%] p-6 lg:p-8 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl lg:text-2xl underline underline-offset-4 mb-4 lg:mb-6">
                Contact information
              </h3>

              <div className="mb-4 lg:mb-6">
                <p className="text-base lg:text-lg uppercase text-yellow-500 font-semibold underline underline-offset-4 py-2 lg:py-4">
                  Stay up to date
                </p>
                <p className="mt-2 font-bold text-lg lg:text-xl w-fit hover:text-[#ffbd4a] transition duration-350 cursor-pointer">
                  (+053) 625 08 09 62
                </p>
                <p className="text-white text-lg lg:text-xl w-fit hover:text-[#ffbd4a] transition duration-350 cursor-pointer">
                  kevincontact@gmail.com
                </p>
              </div>

              <div>
                <p className="text-base lg:text-lg uppercase text-yellow-500 font-semibold underline underline-offset-4 py-2 lg:py-4">
                  Address
                </p>
                <p className="mt-2 font-bold text-base lg:text-lg leading-relaxed">
                  223 Thatcher Road St, Brooklyn, Manhattan, NY 10463
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap font-bold gap-2 mt-4 lg:mt-6">
              {[
                "Facebook",
                "Twitter",
                "Instagram",
                "LinkedIn",
                "Dribbble",
                "Behance",
              ].map((social) => (
                <button
                  key={social}
                  className="px-3 py-2 rounded-full cursor-pointer border border-gray-500 text-xs uppercase hover:border-transparent hover:text-[#ffbd4a] transition duration-350"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-full lg:w-[55%] lg:ml-8 px-0 lg:px-6 mt-8 lg:mt-0">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              <input
                type="text"
                placeholder="Name"
                value={formValues.name}
                onChange={onChange("name")}
                onBlur={onBlur("name")}
                className={`w-full lg:w-2/3 rounded-2xl bg-[#1a1a1a] px-4 lg:px-6 py-4 lg:py-5 text-sm text-white focus:outline-none border-0 border-b ${showError("name") ? "border-b-red-500" : "border-b-[#2f3030]"}`}
              />
              <input
                type="email"
                placeholder="Email"
                value={formValues.email}
                onChange={onChange("email")}
                onBlur={onBlur("email")}
                className={`w-full lg:w-2/3 rounded-2xl bg-[#1a1a1a] px-4 lg:px-6 py-4 lg:py-5 text-sm text-white focus:outline-none mt-4 lg:mt-0 border-0 border-b ${showError("email") ? "border-b-red-500" : "border-b-[#2f3030]"}`}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              <input
                type="text"
                placeholder="Subject"
                value={formValues.subject}
                onChange={onChange("subject")}
                onBlur={onBlur("subject")}
                className={`w-full lg:w-2/3 rounded-2xl bg-[#1a1a1a] px-4 lg:px-6 py-4 lg:py-5 text-sm text-white focus:outline-none border-0 border-b ${showError("subject") ? "border-b-red-500" : "border-b-[#2f3030]"}`}
              />
              <input
                type="text"
                placeholder="Phone"
                value={formValues.phone}
                onChange={onChange("phone")}
                onBlur={onBlur("phone")}
                className={`w-full lg:w-2/3 rounded-2xl bg-[#1a1a1a] px-4 lg:px-6 py-4 lg:py-5 text-sm text-white focus:outline-none mt-4 lg:mt-0 border-0 border-b ${showError("phone") ? "border-b-red-500" : "border-b-[#2f3030]"}`}
              />
            </div>

            <textarea
              placeholder="Message"
              rows={4}
              value={formValues.message}
              onChange={onChange("message")}
              onBlur={onBlur("message")}
              className={`w-full rounded-2xl bg-[#1a1a1a] px-4 py-4 text-sm text-white focus:outline-none border-0 border-b ${showError("message") ? "border-b-red-500" : "border-b-[#2f3030]"}`}
            ></textarea>

            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-6">
              <span className="text-white font-semibold text-lg">9022</span>
              <input
                type="text"
                placeholder="Please Enter Code *"
                value={formValues.code}
                onChange={onChange("code")}
                onBlur={onBlur("code")}
                className={`flex-1 rounded-2xl bg-[#1a1a1a] px-4 py-4 text-sm text-white focus:outline-none border-0 border-b ${showError("code") ? "border-b-red-500" : "border-b-[#2f3030]"}`}
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center mt-4 lg:mt-6">
              <button
                type="submit"
                className="bg-[#ffbd4a] text-black font-semibold rounded-full w-20 h-20 lg:w-36 lg:h-36 flex items-center justify-center hover:bg-white duration-500 transition cursor-pointer"
              >
                Submit
                <Image
                  src="/user/arrow.png"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="rotate-180 ml-2"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default FormCard;
