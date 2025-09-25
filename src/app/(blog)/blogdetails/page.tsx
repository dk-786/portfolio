import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogContent from "../components/BlogContent";
import BlogSidebar from "../components/BlogSidebar";
import Container from "@/components/common/Container";
import Image from "next/image";
import CommentForm from "../components/CommentForm";

const page = () => {
  return (
    <>
      <BlogHeader />
      <Image
            src="/user/10.jpg"
            alt="Blog Image"
            width={1000}
            height={800}
            className="w-full "
          />
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 py-16">
          
          <div className="lg:w-2/3">
            <BlogContent />
              <CommentForm />
          </div>

          <div className="lg:w-1/3 bg-[#111212] border-[#2f3030] h-full border rounded-lg p-9">
            <BlogSidebar />
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
