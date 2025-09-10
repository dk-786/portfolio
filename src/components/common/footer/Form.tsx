"use client";
import React, { useState } from "react";
import Image from "next/image";

const Form = () => {
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newErrors: { [key: string]: boolean } = {};

    ["name", "email", "subject", "phone", "message", "code"].forEach(
      (field) => {
        if (!formData.get(field)) {
          newErrors[field] = true;
        }
      }
    );

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", Object.fromEntries(formData));
    }
  };

  return (
    <div className="w-full md:w-1/2 md:pl-16 py-28 px-6 border-t md:border-t-0 md:border-l border-[#2f3030]">
      <form className="grid gap-9" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={`bg-transparent border-b outline-none py-2 ${
            errors.name
              ? "border-red-500"
              : "border-gray-700 focus:border-[#ffbd4a]"
          }`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`bg-transparent border-b outline-none py-2 ${
            errors.email
              ? "border-red-500"
              : "border-gray-700 focus:border-[#ffbd4a]"
          }`}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className={`bg-transparent border-b outline-none py-2 ${
            errors.subject
              ? "border-red-500"
              : "border-gray-700 focus:border-[#ffbd4a]"
          }`}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className={`bg-transparent border-b outline-none py-2 ${
            errors.phone
              ? "border-red-500"
              : "border-gray-700 focus:border-[#ffbd4a]"
          }`}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          className={`bg-transparent border-b outline-none py-2 resize-none ${
            errors.message
              ? "border-red-500"
              : "border-gray-700 focus:border-[#ffbd4a]"
          }`}
        />
        <div className="flex items-center gap-3">
          <span className="text-lg font-medium text-[#959595]">2160</span>
          <input
            type="text"
            name="code"
            placeholder="Please Enter Code *"
            className={`bg-transparent border-b outline-none py-2 flex-1 ${
              errors.code
                ? "border-red-500"
                : "border-gray-700 focus:border-[#ffbd4a]"
            }`}
          />
        </div>

        <button
          type="submit"
          className="bg-[#ffbd4a] text-black font-semibold rounded-full w-43 h-43 flex items-center justify-center mx-auto hover:bg-white duration-500 transition cursor-pointer"
        >
          Submit
          <Image
            src="/user/arrow.png"
            alt="Arrow"
            width={16}
            height={16}
            className="rotate-180"
          />
        </button>
      </form>
    </div>
  );
};

export default Form;
