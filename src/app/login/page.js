import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="contact-form-section pt-[100px] h-[100vh] flex justify-center bg-gray-900">
      <form className="contact-form md:w-[30%] bg-[#ffffff08] border-[2px] border-[#ffffff1a] rounded-[20px] backdrop-blur-[20px] p-[40px] mb-[30px] ">
        <div className="form-group  ">
          <label className="block mb-[10px] text-[#ffffffcc]" htmlFor="name">Your Name</label>
          <input className="w-[100%] p-[15px] bg-[#ffffff0d] border-[1px] border-[#ffffff33] rounded-[20px] text-white text-[16px] transition-[.3s all ease-in] " type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label  className="block mb-[10px] text-[#ffffffcc]" htmlFor="email">Email Address</label>
          <input className="w-[100%] p-[15px] bg-[#ffffff0d] border-[1px] border-[#ffffff33] rounded-[20px] text-white text-[16px] transition-[.3s all ease-in] " type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label  className="block mb-[10px] text-[#ffffffcc]" htmlFor="subject">Subject</label>
          <input className="w-[100%] p-[15px] bg-[#ffffff0d] border-[1px] border-[#ffffff33] rounded-[20px] text-white text-[16px] transition-[.3s all ease-in] " type="text" id="subject" name="subject" required />
        </div>

        <div className="form-group">
          <label  className="block mb-[10px] text-[#ffffffcc]" htmlFor="message">Message</label>
          <textarea className="w-[100%] p-[15px] bg-[#ffffff0d] border-[1px] border-[#ffffff33] rounded-[20px] text-white text-[16px] transition-[.3s all ease-in] mb-[20px] " id="message" name="message" required></textarea>
        </div>

        <button type="submit" className="submit-btn bg-linear-to-r from-[#667eea] to-[#764ba2] text-white border-0 px-[40px] py-[15px] text-[18px] rounded-[30px] cursor-pointer w-[100%]">
          <Link href={'/'}> Send Message</Link>
        </button>
      </form>
    </section>
  );
};

export default Page;
